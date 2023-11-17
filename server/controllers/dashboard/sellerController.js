
const sellerModal = require('../../models/sellerModal');
const { responseReturn } = require('../../utils/response');


class sellerController {
  get_seller_request = async (req, res) => {
    const { page, searchValue, parPage } = req.query;
    const skipPage = parseInt(parPage) * (parseInt(page) - 1);
    try {
      if (searchValue) {
        //const seller
      } else {
        const sellers = await sellerModal
          .find({ status: "pending" })
          .skip(skipPage)
          .limit(parPage)
          .sort({ createdAt: -1 });
        const totalSeller = await sellerModal
          .find({ status: "pending" })
          .countDocuments();
        responseReturn(res, 200, { totalSeller, sellers });
      }
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };
  get_seller = async (req, res) => {
    const { sellerId } = req.params;

    try {
      const seller = await sellerModal.findById(sellerId);
      responseReturn(res, 200, { seller });
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };
  seller_status_update = async (req, res) => {
    const { sellerId, status } = req.body;
    try {
      await sellerModal.findByIdAndUpdate(sellerId, {
        status,
      });
      const seller = await sellerModal.findById(sellerId);
      responseReturn(res, 200, {
        seller,
        message: "seller status update success",
      });
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };
}

module.exports = new sellerController();