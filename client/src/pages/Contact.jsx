import { FaClock, FaEnvelope, FaMap, FaPhoneAlt } from "react-icons/fa";
import Footer from "../components/Footer";
import Header from "../components/Header";
import jon from "../assets/jon.png";
import suborna from '../assets/3.png'
import alra from '../assets/2.png'
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contract | R_S ecommerce </title>
      </Helmet>
      <Header />
      <div className="w-full px-20 md-lg:px-8 py-8">
        <div className=" flex md-lg:flex-col justify-center items-start  gap-11">
          <div className="w-[40%] md-lg:w-full">
            <div className="flex flex-col gap-6">
              <p className="text-[12px]">GET IN TOUCH</p>
              <h2 className="text-[26px] font-bold">
                Visit one of our agency location or contact us today
              </h2>
              <h3 className="text-[16px] font-bold">Head office</h3>
            </div>

            <ul className="flex flex-col justify-center items-start gap-4 mt-4">
              <li className="flex justify-center items-center gap-3">
                <span>
                  {" "}
                  <FaMap />
                </span>
                <span> 45 Rampura, Aftabnagar Dhaka Bangladesh, New York</span>
              </li>
              <li className="flex justify-center items-center gap-3">
                <span>
                  <FaEnvelope />
                </span>
                <span>mdabdurrahim196697@gamil.com</span>
              </li>
              <li className="flex justify-center items-center gap-3">
                <span>
                  <FaPhoneAlt />
                </span>
                <span>+(088) 02932098190</span>
              </li>
              <li className="flex justify-center items-center gap-3">
                <span>
                  {" "}
                  <FaClock />
                </span>
                <span> Monday to Saturday: 9.00am to 16.0 pm</span>
              </li>
            </ul>
          </div>
          <div className="w-[55%] h-[400px] md-lg:w-full">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14605.623195456206!2d90.41674982024085!3d23.768559791048936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7892dcf0001%3A0x853ad729be4edc71!2sEast%20West%20University!5e0!3m2!1sen!2sbd!4v1671986882208!5m2!1sen!2sbd"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: "0" }}
              width="600"
              height="450"
            ></iframe>
          </div>
        </div>
        <div className="w-full flex md-lg:flex-col mt-14 border md-lg:p-4 p-14 gap-11">
          <div className="flex md-lg:w-full flex-col gap-5 w-[65%]">
            <p className="text-[12px]">LEAVE A MESSAGE</p>

            <h2 className="text-[26px] font-bold">We love to hear from you</h2>

            <form className="flex flex-col gap-5 " action="">
              <input
                className="px-[15px] py-[12px] outline-none border border-solid border-[#e1e1e1]"
                type="text"
                placeholder="Your name"
              />
              <input
                className="px-[15px] py-[12px] outline-none border border-solid border-[#e1e1e1]"
                type="text"
                placeholder="E-mail"
              />
              <input
                className="px-[15px] py-[12px] outline-none border border-solid border-[#e1e1e1]"
                type="text"
                placeholder="Subject"
              />
              <textarea
                className="px-[15px] py-[12px] outline-none border border-solid border-[#e1e1e1]"
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Your message"
              ></textarea>
              <button className="bg-[#088178] text-[#fff] text-[14px] w-[100px] p-2 rounded font-semibold">
                Submit
              </button>
            </form>
          </div>
          <div className="w-[30%] md-lg:w-full flex flex-col gap-4">
            <div className=" flex md-lg:justify-start justify-end gap-3">
              <div className="w-[65px] h-[65px]">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={jon}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[16px] font-semibold">Abdur Rahim</h3>
                <div className="text-[13px]">
                  <p>Senior Marketing Manager</p>
                  <p>Phone: + 000 123 000 77 88</p>
                  <p>Email: contact@examole.com</p>
                </div>
              </div>
            </div>
            <div className=" flex md-lg:justify-start  justify-end gap-3">
              <div className="w-[65px] h-[65px]">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={suborna}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[16px] font-semibold">
                  Mst. Suborna Akhter
                </h3>
                <div className="text-[13px]">
                  <p>Senior Marketing Manager</p>
                  <p>Phone: + 000 123 000 77 88</p>
                  <p>Email: contact@examole.com</p>
                </div>
              </div>
            </div>
            <div className=" flex md-lg:justify-start  justify-end gap-3">
              <div className="w-[65px] h-[65px]">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={alra}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[16px] font-semibold">Sara Alam Khan</h3>
                <div className="text-[13px]">
                  <p>Senior Marketing Manager</p>
                  <p>Phone: + 000 123 000 77 88</p>
                  <p>Email: contact@examole.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
