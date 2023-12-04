import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";
import Footer from "../components/Footer";
import  stripe from '../assets/payment/stripe.png'
import bkash from "../assets/payment/bkash.png";
import roket from "../assets/payment/roket.png";
import nogot from "../assets/payment/nogot.png";
const Payment = () => {
  const {
    state: { price, items, orderId },
  } = useLocation();
  const [paymentMethod, setPaymentMethod] = useState("stripe");
  return (
    <div>
      <Header />
      <section className="bg-[#eeeeee]">
        <div className="w-[85%] lg:w-[90%] md:w-[90%] sm:w-[90%] mx-auto py-16 mt-4">
          <div className="flex flex-wrap md:flex-col-reverse">
            <div className="w-7/12 md:w-full">
              <div className="pr-2 md:pr-0">
                <div className="flex flex-wrap">
                  <div
                    onClick={() => setPaymentMethod("stripe")}
                    className={`w-[20%] border-r cursor-pointer py-8 px-12 ${
                      paymentMethod === "stripe" ? "bg-white" : "bg-slate-100"
                    }`}
                  >
                    <div className="flex flex-col gap-[3px] justify-center items-center">
                      <img
                        src={stripe}
                        alt="stripe"
                      />
                      <span className="text-slate-600">Stripe</span>
                    </div>
                  </div>
                  <div
                    onClick={() => setPaymentMethod("bkash")}
                    className={`w-[20%] border-r cursor-pointer py-8 px-12 ${
                      paymentMethod === "bkash" ? "bg-white" : "bg-slate-100"
                    }`}
                  >
                    <div className="flex flex-col gap-[3px] justify-center items-center">
                      <img
                        src={bkash}
                        alt="bkash"
                      />
                      <span className="text-slate-600">Bkash</span>
                    </div>
                  </div>
                  <div
                    onClick={() => setPaymentMethod("nogot")}
                    className={`w-[20%] border-r cursor-pointer py-8 px-12 ${
                      paymentMethod === "nogot" ? "bg-white" : "bg-slate-100"
                    }`}
                  >
                    <div className="flex flex-col gap-[3px] justify-center items-center">
                      <img
                        src={nogot}
                        alt="nogot"
                      />
                      <span className="text-slate-600">Nogot</span>
                    </div>
                  </div>
                  <div
                    onClick={() => setPaymentMethod("roket")}
                    className={`w-[20%] border-r cursor-pointer py-8 px-12 ${
                      paymentMethod === "roket" ? "bg-white" : "bg-slate-100"
                    }`}
                  >
                    <div className="flex flex-col gap-[3px] justify-center items-center">
                      <img
                        src={roket}
                        alt="roket"
                      />
                      <span className="text-slate-600">Roket</span>
                    </div>
                  </div>
                </div>
                {paymentMethod === "stripe" && (
                  <div>
                    <h1>stripe</h1>
                    {/* <Stripe orderId={orderId} price={price} /> */}
                  </div>
                )}
                {paymentMethod === "bkash" && (
                  <div className="w-full px-4 py-8 bg-white shadow-sm">
                    <button className="px-10 py-[6px] rounded-sm hover:shadow-wrange-500/20 hover:shadow-lg bg-orange-500 text-white">
                      Pay Now
                    </button>
                  </div>
                )}
                {paymentMethod === "nogot" && (
                  <div className="w-full px-4 py-8 bg-white shadow-sm">
                    <button className="px-10 py-[6px] rounded-sm hover:shadow-wrange-500/20 hover:shadow-lg bg-orange-500 text-white">
                      Pay Now
                    </button>
                  </div>
                )}
                {paymentMethod === "roket" && (
                  <div className="w-full px-4 py-8 bg-white shadow-sm">
                    <button className="px-10 py-[6px] rounded-sm hover:shadow-wrange-500/20 hover:shadow-lg bg-orange-500 text-white">
                      Pay Now
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="w-5/12 md:w-full">
              <div className="pl-2 md:pl-0 md:mb-0">
                <div className="bg-white shadow p-5 text-slate-600 flex flex-col gap-3">
                  <h2>Order Summary</h2>
                  <div className="flex justify-between items-center">
                    <span>{items} items and shipping fee included</span>
                    <span>${price}</span>
                  </div>
                  <div className="flex justify-between items-center font-semibold">
                    <span>Total Amount</span>
                    <span className="text-lg text-orange-500">${price}</span>
                  </div>
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

export default Payment;
