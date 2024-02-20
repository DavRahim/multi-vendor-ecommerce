const formidable = require("formidable");
const { responseReturn } = require("../utils/response");
const productModel = require("../models/productModel");
const bannerModel = require("../models/bannerModel");
const cloudinary = require("cloudinary").v2;
const {
  mongo: { ObjectId },
} = require("mongoose");

class bannerController {
  add_banner = async (req, res) => {
    const form = formidable({ multiples: true });
    form.parse(req, async (err, field, files) => {
      const { productId } = field;
      const { image } = files;
      cloudinary.config({
        cloud_name: process.env.cloud_name,
        api_key: process.env.api_key,
        api_secret: process.env.api_secret,
        secure: true,
      });
      try {
        const { slug } = await productModel.findById(productId);
        const result = await cloudinary.uploader.upload(image.filepath, {
          folder: "banners",
        });

        const banner = await bannerModel.create({
          productId,
          banner: result.url,
          link: slug,
        });

        responseReturn(res, 201, { banner, message: "banner add success" });
      } catch (error) {
        // console.log(error);
        responseReturn(res, 500, { error: error.message });
      }
    });
  };

  get_banner = async (req, res) => {
    const { productId } = req.params;
    // console.log(productId);
    try {
      const banner = await bannerModel.findOne({
        productId: new ObjectId(productId),
      });
      responseReturn(res, 200, { banner });
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };
  get_banners = async (req, res) => {
    // console.log("banners");
    try {
      const banners = await bannerModel.aggregate([
        {
          $sample: {
            size: 10,
          },
        },
      ]);
      // console.log(banners);
      responseReturn(res, 200, { banners });
    } catch (error) {
      // console.log(error);
      responseReturn(res, 500, { error: error.message });
    }
  };

  update_banner = async (req, res) => {
    const { bannerId } = req.params;

    const form = formidable({});
    form.parse(req, async (err, _, files) => {
      const { image } = files;
      cloudinary.config({
        cloud_name: process.env.cloud_name,
        api_key: process.env.api_key,
        api_secret: process.env.api_secret,
        secure: true,
      });

      try {
        let banner = await bannerModel.findById(bannerId);

        let temp = banner.banner.split("/");

        temp = temp[temp.length - 1];
        const imageName = (temp = temp.split(".")[0]);
        // console.log(imageName);
        await cloudinary.uploader.destroy(imageName);
        const { url } = await cloudinary.uploader.upload(image.filepath, {
          folder: "banners",
        });

        await bannerModel.findByIdAndUpdate(bannerId, {
          banner: url,
        });

        banner = await bannerModel.findById(bannerId);
        responseReturn(res, 200, { banner, message: "banner update success" });
      } catch (error) {
        // console.log(error);
        responseReturn(res, 500, { error: error.message });
      }
    });
  };
}

module.exports = new bannerController();
