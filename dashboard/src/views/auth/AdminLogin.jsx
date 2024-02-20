import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import logo from "../../assets/logo.png";

import { admin_login, messageClear } from "../../store/reducers/authReducer";
import {PropagateLoader } from 'react-spinners'
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate()
  const dispatch =useDispatch();
  const { loader, errorMessage, successMessage } = useSelector(
    (state) => state.auth
  );
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(admin_login(state))
    // console.log(state);
  };

  const overRightStyle = {
    display: "flex",
    margin: "0 auto",
    height: "20px",
    justifyContent: "center",
    alignItem: "center",
  }
  useEffect(() => {
     if (successMessage) {
       toast.success(successMessage);
       dispatch(messageClear);
       navigate("/");
     }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear);
    }
   
  }, [errorMessage, successMessage]);
  return (
    <div className="min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center">
      <div className="w-[350px] text-[#d0d2d6] p-4 rounded-md">
        <div className="bg-[#283046] p-4 rounded-md">
          <div className="h-[70px] flex justify-center items-center">
            <div className="w-[180px] h-[50px]">
              <img className="w-full h-full" src={logo} alt="logo" />
            </div>
          </div>
          <form onSubmit={submitHandler}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden"
                onChange={inputHandle}
                value={state.email}
                type="email"
                name="email"
                placeholder="email"
                id="email"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">Password</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden"
                onChange={inputHandle}
                value={state.password}
                type="password"
                name="password"
                placeholder="password"
                id="password"
                required
              />
            </div>

            <button
              disabled={loader ? true : false}
              className="bg-blue-500 w-full hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-5"
            >
              {loader ? <PropagateLoader cssOverride={overRightStyle} /> : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
