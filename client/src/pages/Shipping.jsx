import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Footer from "../components/Footer";
import { useState } from "react";

import product1 from "../assets/products/1.webp";
import product2 from "../assets/products/2.webp";


const Shipping = () => {
  const products = [product1, product2];
   const {
     state: { price, shipping_fee, items },
   } = useLocation();


  const [state, setState] = useState({
    name: "",
    address: "",
    phone: "",
    post: "",
    province: "",
    city: "",
    area: "",
  });
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const [res, setRes] = useState(false);
  const save = (e) => {
    e.preventDefault();
    const { name, address, phone, post, province, city, area } = state;
    if (name && address && phone && post && province && city && area) {
      setRes(true);
    }
  };
  return (
    <div>
      <Header />
      <section className='bg-[url("http://localhost:5173/order.jpg")] h-[220px] mt-6 bg-cover bg-no-repeat relative bg-left'>
        <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center h-full w-full text-white">
              <h2 className="text-3xl font-bold">Shop.my</h2>
              <div className="flex justify-center items-center gap-2 text-2xl w-full">
                <Link to="/">Home</Link>
                <span className="pt-2">
                  <MdOutlineKeyboardArrowRight />
                </span>
                <span>Place Order</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#eeeeee]">
        <div className="w-[85%] lg:w-[90%] md:w-[90%] sm:w-[90] mx-auto py-16">
          <div className="w-full flex flex-wrap">
            <div className="w-[67%] md-lg:w-full">
              <div className="flex flex-col gap-3">
                <div className="bg-white p-6 shadow-sm rounded-md">
                  {!res && (
                    <>
                      <h2 className="text-slate-600 font-bold pb-3">
                        Shipping Information
                      </h2>
                      <form onSubmit={save}>
                        <div className="flex md:flex-col md:gap-2 w-full gap-5 text-slate-600">
                          <div className="flex flex-col gap-1 mb-2 w-full">
                            <label htmlFor="name">Name</label>
                            <input
                              onChange={inputHandle}
                              value={state.name}
                              type="text"
                              className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                              name="name"
                              placeholder="name"
                              id="name"
                            />
                          </div>
                          <div className="flex flex-col gap-1 mb-2 w-full">
                            <label htmlFor="address">Address</label>
                            <input
                              onChange={inputHandle}
                              value={state.address}
                              type="text"
                              className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                              name="address"
                              placeholder="House no / building / strreet /area"
                              id="address"
                            />
                          </div>
                        </div>
                        <div className="flex md:flex-col md:gap-2 w-full gap-5 text-slate-600">
                          <div className="flex flex-col gap-1 mb-2 w-full">
                            <label htmlFor="phone">Phone</label>
                            <input
                              onChange={inputHandle}
                              value={state.phone}
                              type="text"
                              className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                              name="phone"
                              placeholder="phone"
                              id="phone"
                            />
                          </div>
                          <div className="flex flex-col gap-1 mb-2 w-full">
                            <label htmlFor="post">Post</label>
                            <input
                              onChange={inputHandle}
                              value={state.post}
                              type="text"
                              className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                              name="post"
                              placeholder="post"
                              id="post"
                            />
                          </div>
                        </div>
                        <div className="flex md:flex-col md:gap-2 w-full gap-5 text-slate-600">
                          <div className="flex flex-col gap-1 mb-2 w-full">
                            <label htmlFor="province">Province</label>
                            <input
                              onChange={inputHandle}
                              value={state.province}
                              type="text"
                              className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                              name="province"
                              placeholder="province"
                              id="province"
                            />
                          </div>
                          <div className="flex flex-col gap-1 mb-2 w-full">
                            <label htmlFor="city">City</label>
                            <input
                              onChange={inputHandle}
                              value={state.city}
                              type="text"
                              className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                              name="city"
                              placeholder="city"
                              id="city"
                            />
                          </div>
                        </div>
                        <div className="flex md:flex-col md:gap-2 w-full gap-5 text-slate-600">
                          <div className="flex flex-col gap-1 mb-2 w-full">
                            <label htmlFor="area">Area</label>
                            <input
                              onChange={inputHandle}
                              value={state.area}
                              type="text"
                              className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                              name="area"
                              placeholder="area"
                              id="province"
                            />
                          </div>
                          <div className="flex flex-col gap-1 mt-3 w-full">
                            <button className="px-3 py-[6px] rounded-sm hover:shadow-indigo-500/20 hover:shadow-lg bg-indigo-500 text-white">
                              Save
                            </button>
                          </div>
                        </div>
                      </form>
                    </>
                  )}
                  {res && (
                    <div className="flex flex-col gap-1">
                      <h2 className="text-slate-600 font-semibold pb-2">
                        Deliver to {state.name}
                      </h2>
                      <p>
                        <span className="bg-blue-200 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                          Home
                        </span>
                        <span className="text-slate-600 text-sm">
                          {state.address} {state.province} {state.city}{" "}
                          {state.area}
                        </span>
                        <span
                          onClick={() => setRes(false)}
                          className="text-indigo-500 cursor-pointer"
                        >
                          {" "}
                          change
                        </span>
                      </p>
                      <p className="text-slate-600 text-sm">
                        Email to sheikhfarid@gmail.com
                      </p>
                    </div>
                  )}
                </div>
                {products.map((p, i) => (
                  <div key={i} className="flex bg-white p-4 flex-col gap-2">
                    <div className="flex justify-start items-center">
                      <h2 className="text-md text-slate-600">Rahim store</h2>
                    </div>
                    {products.map((pt, j) => (
                      <div key={j} className="w-full flex flex-wrap">
                        <div className="flex sm:w-full gap-2 w-7/12">
                          <div className="flex gap-2 justify-start items-center">
                            <img
                              className="w-[80px] h-[80px]"
                              src={pt}
                              // src={pt.productInfo.images[0]}
                              alt="product image"
                            />
                            <div className="pr-4 text-slate-600">
                              <h2 className="text-md">
                                Oin k{/* {pt.productInfo.name} */}
                              </h2>
                              <span className="text-sm">
                                Brand : Easy
                                {/* Brand : {pt.productInfo.brand} */}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end w-5/12 sm:w-full sm:mt-3">
                          <div className="pl-4 sm:pl-0">
                            <h2 className="text-lg text-orange-500">
                              $ 70
                              {/* {pt.productInfo.price -
                                  Math.floor(
                                    (pt.productInfo.price *
                                      pt.productInfo.discount) /
                                      100
                                  )} */}
                            </h2>
                            <p className="line-through">
                              {/* ${pt.productInfo.price} */}$ 90
                            </p>
                            {/* <p>-{pt.productInfo.discount}%</p> */}
                            <p>-70 %</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[33%] md-lg:w-full">
              <div className="pl-3 md-lg:pl-0">
                <div className="bg-white font-medium p-5 text-slate-600 flex flex-col gap-3">
                  <h2 className="text-xl font-semibold">Order Summary</h2>
                  <div className="flex justify-between items-center">
                    {/* <span>Items Total({price})</span> */}
                    <span>Items Total 90</span>
                    <span>$ 60</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Delivery Fee</span>
                    <span>$ 70</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Total Payment</span>
                    {/* <span>${price + shipping_fee}</span> */}
                    <span>$ 70</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Total</span>
         
                    <span>$ 44</span>
                    {/* <span>${price + shipping_fee}</span>
                      <span>${price + shipping_fee}</span> */}
                  </div>
                  <button
                    //   onClick={placeOrder}
                    disabled={res ? false : true}
                    className={`px-5 py-[6px] rounded-sm hover:shadow-orange-500/20 hover:shadow-lg ${
                      res ? "bg-orange-500" : "bg-orange-300"
                    } text-sm text-white uppercase`}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Shipping;
