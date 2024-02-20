import { useEffect, useState } from "react";
import { BsImages } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { add_banner, get_banner, messageClear, update_banner } from "../../store/reducers/bannerReducer";
import { overRightStyle } from "../../utils/utils";
import { PropagateLoader } from "react-spinners";
import toast from "react-hot-toast";

const AddBanners = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  // const [banner, setBanner] = useState("");
  const [image, setImage] = useState("");
  const [imageShow, setImageShow] = useState("");

  const { loader, banners, banner, errorMessage, successMessage } = useSelector(
    (state) => state.banner
  );
  const imageHandle = (e) => {
    const files = e.target.files;
    const length = files.length;
    if (length > 0) {
      setImage(files[0]);
      setImageShow(URL.createObjectURL(files[0]));
    }
  };
  const add = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("productId", productId);
    formData.append("image", image);
    dispatch(add_banner(formData));
  };

  const update = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("image", image);
    dispatch(update_banner({info: formData, bannerId: banner._id}));
  }

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear())
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      
    }
  }, [errorMessage, successMessage]);

  useEffect(() =>{
     dispatch(get_banner(productId));
  },[])

  return (
    <div className="px-2 lg:px-7 pt-5 ">
      <div className="w-full p-4 bg-[#283046] rounded-md ">
        <div className="flex justify-between items-center pb-4 ">
          <h1 className="text-[#d0d2d6] text-xl font-semibold">Add Banners</h1>
          <Link
            className="bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg hover:text-white rounded-md px-7 py-2 my-2"
            to={"/seller/dashboard/banners"}
          >
            Banners
          </Link>
        </div>
        {!banner && (
          <div>
            <form onSubmit={add}>
              <div className=" w-full  text-[#d0d2d6] mb-4">
                <label
                  className="flex justify-center items-center flex-col h-[180px] cursor-pointer border border-dashed hover:border-indigo-500 w-full text-[#d0d2d6]"
                  htmlFor="image"
                >
                  <span>
                    <BsImages />
                  </span>
                  <span>Select banner image</span>
                </label>
                <input
                  onChange={imageHandle}
                  multiple
                  type="file"
                  id="image"
                  className="hidden"
                  required
                />
              </div>
              {imageShow && (
                <div className="mb-4">
                  {" "}
                  <img className="w-full h-auto" src={imageShow} alt="" />
                </div>
              )}
              <div className="flex ">
                <button
                  disabled={loader ? true : false}
                  className="bg-blue-500 w-[145px] hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-5"
                >
                  {loader ? (
                    <PropagateLoader
                      color="#fff"
                      cssOverride={overRightStyle}
                    />
                  ) : (
                    "Add banner"
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
        {banner && (
          <div>
           
              <div className="mb-4">
                {" "}
                <img className="w-full h-auto" src={banner.banner} alt="" />
              </div>
            
            <form onSubmit={update}>
              <div className=" w-full  text-[#d0d2d6] mb-4">
                <label
                  className="flex justify-center items-center flex-col h-[180px] cursor-pointer border border-dashed hover:border-indigo-500 w-full text-[#d0d2d6]"
                  htmlFor="image"
                >
                  <span>
                    <BsImages />
                  </span>
                  <span>Select banner image</span>
                </label>
                <input
                  onChange={imageHandle}
                  multiple
                  type="file"
                  id="image"
                  className="hidden"
                  required
                />
              </div>
              {imageShow && (
                <div className="mb-4">
                  {" "}
                  <img className="w-full h-auto" src={imageShow} alt="" />
                </div>
              )}
              <div className="flex ">
                <button
                  disabled={loader ? true : false}
                  className="bg-blue-500 w-[165px] hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-5"
                >
                  {loader ? (
                    <PropagateLoader
                      color="#fff"
                      cssOverride={overRightStyle}
                    />
                  ) : (
                    "update banner"
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddBanners;
