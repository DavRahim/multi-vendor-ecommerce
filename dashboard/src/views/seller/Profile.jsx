import { BsImages } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { FadeLoader, PropagateLoader } from "react-spinners";
import { overRightStyle } from "../../utils/utils";

import { useDispatch, useSelector } from 'react-redux'
import { profile_image_upload, profile_info_add } from "../../store/reducers/authReducer";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { create_stripe_connect_account } from "../../store/reducers/SellerReducer";
const Profile = () => {
  const { userInfo, loader, successMessage } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch()
   const [state, setState] = useState({
     division: "",
     district: "",
     shopName: "",
     sub_district: "",
   });


  const add_image = (e) => {
    if (e.target.files.length > 0) {
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      dispatch(profile_image_upload(formData));
    }
  };

   useEffect(() => {
     if (successMessage) {
       toast.success(successMessage);
     }
   }, [successMessage]);

    const add = (e) => {
      e.preventDefault();
      dispatch(profile_info_add(state));
    };
   const inputHandle = (e) => {
     setState({
       ...state,
       [e.target.name]: e.target.value,
     });
   };
  return (
    <div className="px-2 lg:px-7 py-5">
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-6/12">
          <div className="w-full p-4 bg-[#283046] rounded-md text-[#d0d2d6]">
            <div className="flex justify-center items-center py-3">
              {userInfo?.image ? (
                <label
                  className="h-[210px] w-[300px] p-3 cursor-pointer overflow-hidden relative"
                  htmlFor="img"
                >
                  <img className="w-full h-full" src={userInfo?.image} alt="" />
                  {loader && (
                    <div className="bg-slate-700 absolute left-0 top-0 w-full h-full opacity-70 flex justify-center items-center z-30">
                      <span>
                        <FadeLoader />
                      </span>
                    </div>
                  )}
                </label>
              ) : (
                <label
                  className="flex justify-center items-center flex-col h-[210px] w-[300px] cursor-pointer border-dashed border hover:border-indigo-500 border-white relative"
                  htmlFor="img"
                >
                  <span>
                    <BsImages />
                  </span>
                  <span>Select Image</span>
                  {loader && (
                    <div className="bg-slate-700 absolute left-0 top-0 w-full h-full opacity-70 flex justify-center items-center z-30">
                      <span>
                        <FadeLoader />
                      </span>
                    </div>
                  )}
                </label>
              )}
              <input
                onChange={add_image}
                type="file"
                className="hidden"
                id="img"
              />
            </div>
            <div className="px-0 md:px-5 py-2">
              <div className="flex justify-between text-sm flex-col p-4 bg-slate-800 rounded-md relative">
                <span className="p-[6px] bg-yellow-500 rounded hover:shadow-lg  hover:shadow-orange-500/50 absolute right-2 top-2 cursor-pointer ">
                  <FaEdit />
                </span>
                <div className="flex gap-2">
                  <span> Name: </span>
                  <span>{userInfo.name}</span>
                </div>
                <div className="flex gap-2">
                  <span>Email: </span>
                  <span>{userInfo.email}</span>
                </div>
                <div className="flex gap-2">
                  <span>Role: </span>
                  <span>{userInfo.role}</span>
                </div>
                <div className="flex gap-2">
                  <span>Status: </span>
                  <span>{userInfo.status}</span>
                </div>
                <div className="flex gap-2">
                  <span>Payment Account: </span>
                  <p>
                    {userInfo.payment === "active" ? (
                      <span className="bg-green-500 text-white text-xs cursor-pointer font-normal ml-2 px-2 py-0.5 rounded">
                        {userInfo.payment}
                      </span>
                    ) : (
                      <span
                        onClick={() =>
                          dispatch(create_stripe_connect_account())
                        }
                        className="bg-blue-500 text-white text-xs cursor-pointer font-normal ml-2 px-2 py-0.5 rounded"
                      >
                        click Active
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="px-2 lg:px-7 py-5">
              {!userInfo.shopInfo ? (
                <form onSubmit={add}>
                  <div className="flex flex-col w-full  gap-1 mb-3">
                    <label htmlFor="shop">Shop Name</label>
                    <input
                      className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6] "
                      type="text"
                      placeholder="shop name"
                      name="shopName"
                      id="shop"
                      value={state.shopName}
                      onChange={inputHandle}
                    />
                  </div>
                  <div className="flex flex-col w-full  gap-1 mb-3">
                    <label htmlFor="division">Division</label>
                    <input
                      className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6] "
                      type="text"
                      placeholder="division"
                      name="division"
                      id="division"
                      value={state.division}
                      onChange={inputHandle}
                    />
                  </div>
                  <div className="flex flex-col w-full  gap-1 mb-3">
                    <label htmlFor="district">District</label>
                    <input
                      className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6] "
                      type="text"
                      placeholder="district name"
                      name="district"
                      id="district"
                      value={state.district}
                      onChange={inputHandle}
                    />
                  </div>
                  <div className="flex flex-col w-full  gap-1 mb-3">
                    <label htmlFor="sub">Sub District</label>
                    <input
                      className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6] "
                      type="text"
                      placeholder="Sub District"
                      name="sub_district"
                      id="sub"
                      value={state.sub_district}
                      onChange={inputHandle}
                    />
                  </div>
                  <button
                    disabled={loader ? true : false}
                    className="bg-blue-500 w-[190px] hover:shadow-blue-500/20 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3"
                  >
                    {loader ? (
                      <PropagateLoader
                        color="#fff"
                        cssOverride={overRightStyle}
                      />
                    ) : (
                      "Update Info"
                    )}
                  </button>
                </form>
              ) : (
                <div className="flex justify-between text-sm flex-col p-4 bg-slate-800 rounded-md relative">
                  <span className="p-[6px] bg-yellow-500 rounded hover:shadow-lg  hover:shadow-orange-500/50 absolute right-2 top-2 cursor-pointer ">
                    <FaEdit />
                  </span>
                  <div className="flex gap-2">
                    <span>Shop Name : </span>
                    <span>{userInfo.shopInfo?.shopName}</span>
                  </div>
                  <div className="flex gap-2">
                    <span>Division : </span>
                    <span>{userInfo.shopInfo?.division}</span>
                  </div>
                  <div className="flex gap-2">
                    <span>District : </span>
                    <span>{userInfo.shopInfo?.district}</span>
                  </div>
                  <div className="flex gap-2">
                    <span>Sub District : </span>
                    <span>{userInfo.shopInfo?.sub_district}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12">
          <div className="w-full pl-0 md:pl-7 mt-6 md:mt-0 text-[#d0d2d6] ">
            <div className="bg-[hsl(224,27%,22%)] p-4 rounded-md">
              <h1 className="text-[#d0d2d6] text-lg font-semibold">
                Change Password
              </h1>
              <form className="p-4">
                <div className="flex flex-col w-full  gap-1 mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6] "
                    type="email"
                    placeholder="email"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="flex flex-col w-full  gap-1 mb-3">
                  <label htmlFor="o_password">Old Password</label>
                  <input
                    className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6] "
                    type="password"
                    placeholder="old password"
                    name="o_password"
                    id="o_password"
                  />
                </div>
                <div className="flex flex-col w-full  gap-1 mb-3">
                  <label htmlFor="n_password">New Password</label>
                  <input
                    className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6] "
                    type="password"
                    placeholder="new password"
                    name="n_password"
                    id="n_password"
                  />
                </div>
                <button className="bg-blue-500 text-[#d0d2d6] hover:shadow-blue-500/50 hover:shadow-lg hover:text-white rounded-md px-7 py-2 my-2">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

