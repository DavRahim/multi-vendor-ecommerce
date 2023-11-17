import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import FadeLoader from "react-spinners/FadeLoader";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
import login1 from '../assets/login.jpg'
import { useState } from "react";

const Login = () => {
    const loader = false
    const [state, setState] = useState({
      name: "",
      email: "",
      password: "",
    });
    const inputHandle = (e) => {
      setState({
        ...state,
        [e.target.name]: e.target.value,
      });
    };
     const login = (e) => {
       e.preventDefault();
       console.log(state);
     };
    return (
      <div>
        <Header />
        {loader && (
          <div className="w-screen h-screen flex justify-center items-center fixed left-0 top-0 bg-[#38303033] z-[999]">
            <FadeLoader />
          </div>
        )}
        <div className="bg-slate-200 mt-4">
          <div className="w-full justify-center items-center p-10">
            <div className="grid grid-cols-2 md-lg:grid-cols-1 md-lg:w-[80%] w-[60%] mx-auto bg-white rounded-md">
              <div className="px-8 py-8">
                <h2 className="text-center w-full text-xl text-slate-600 font-bold">
                  Login
                </h2>
                <div>
                  <form onSubmit={login} className="text-slate-600">
                    <div className="flex flex-col gap-1 mb-2">
                      <label htmlFor="email">Email</label>
                      <input
                        onChange={inputHandle}
                        value={state.email}
                        type="email"
                        className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                        id="email"
                        name="email"
                        placeholder="email"
                      />
                    </div>
                    <div className="flex flex-col gap-1 mb-4">
                      <label htmlFor="password">Password</label>
                      <input
                        onChange={inputHandle}
                        value={state.password}
                        type="password"
                        className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                        id="password"
                        name="password"
                        placeholder="password"
                      />
                    </div>
                    <button className="px-8 w-full py-2 bg-purple-500 shadow-lg hover:shadow-indigo-500/30 text-white rounded-md">
                      Login
                    </button>
                  </form>
                  <div className="flex justify-center items-center py-2">
                    <div className="h-[1px] bg-slate-300 w-[95%]"></div>
                    <span className="px-3 text-slate-600">or</span>
                    <div className="h-[1px] bg-slate-300 w-[95%]"></div>
                  </div>
                  <button className="px-8 w-full py-2 bg-indigo-500 shadow hover:shadow-indigo-500/30 text-white rounded-md flex justify-center items-center gap-2 mb-3">
                    <span>
                      <FaFacebookF />
                    </span>
                    <span>Login with Facebook</span>
                  </button>
                  <button className="px-8 w-full py-2 bg-orange-500 shadow hover:shadow-orange-500/30 text-white rounded-md flex justify-center items-center gap-2 mb-3">
                    <span>
                      <AiOutlineGoogle />
                    </span>
                    <span>Login with Facebook</span>
                  </button>
                </div>
                <div className="text-center text-slate-600 pt-1">
                  <p>
                    You have no account ?{" "}
                    <Link className="text-blue-500" to="/register">
                      Register
                    </Link>
                  </p>
                </div>
              </div>
              <div className="w-full md-lg:hidden h-full py-4 pr-4">
                <img className="w-full h-[95%]" src={login1} alt="" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
};

export default Login;