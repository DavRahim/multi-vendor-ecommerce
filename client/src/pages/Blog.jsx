import Header from "../components/Header";
import blog from '../assets/blog/b1.jpg'
import { FiArrowRight } from "react-icons/fi";
import { Helmet } from "react-helmet-async";

const Blog = () => {
    return (
      <>
        <Helmet>
          <title>Blog | R_S ecommerce </title>
        </Helmet>
        <Header />

        <div className="w-full pt-16">
          <div className="w-full md-lg:flex-col md-lg:p-16 flex justify-center items-center px-32 pt-16 pb-16 gap-8">
            <div className="w-full relative">
              <h2 className="absolute text-7xl font-extrabold -top-10 -z-10 text-[#c9cbce]">
                13/03
              </h2>
              <img
                className="w-full h-[300px] z-10 object-cover"
                src={blog}
                alt=""
              />
            </div>
            <div className="flex justify-center items-start flex-col gap-5">
              <h5 className="text-[20px] font-bold">
                The Cotton Jersey zip-up Hoodies
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
                animi. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Vel et ducimus
              </p>
              <button className="flex justify-center items-center gap-4 text-[#088178] text-[16px] font-semibold">
                CONTINUE READ{" "}
                <span>
                  {" "}
                  <FiArrowRight />
                </span>{" "}
              </button>
            </div>
          </div>
          <div className="w-full md-lg:flex-col md-lg:p-16 flex justify-center items-center px-32 pt-16 pb-16 gap-8">
            <div className="w-full relative">
              <h2 className="absolute text-7xl font-extrabold -top-10 -z-10 text-[#c9cbce]">
                13/03
              </h2>
              <img
                className="w-full h-[300px] z-10 object-cover"
                src={blog}
                alt=""
              />
            </div>
            <div className="flex justify-center items-start flex-col gap-5">
              <h5 className="text-[20px] font-bold">
                The Cotton Jersey zip-up Hoodies
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
                animi. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Vel et ducimus
              </p>
              <button className="flex justify-center items-center gap-4 text-[#088178] text-[16px] font-semibold">
                CONTINUE READ{" "}
                <span>
                  {" "}
                  <FiArrowRight />
                </span>{" "}
              </button>
            </div>
          </div>
        </div>
      </>
    );
};

export default Blog;