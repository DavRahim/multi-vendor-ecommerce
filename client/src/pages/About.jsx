import Header from "../components/Header";
import about from '../assets/blog/a6.jpg'
import Marquee from "react-fast-marquee";
import Footer from "../components/Footer";
import video from '../assets/1.mp4'
import { Helmet } from "react-helmet-async";

const About = () => {
    return (
      <>
        <Helmet>
          <title>About | R_S ecommerce </title>
        </Helmet>
        <Header />
        <div className="w-full ">
          <div className="w-full  md-lg:flex-col md-lg:p-8  flex justify-center items-center px-[80px] py-[40px] gap-8">
            <div className="w-1/2 md-lg:w-full ">
              <img
                className="w-full h-full z-10 object-cover rounded"
                src={about}
                alt=""
              />
            </div>
            <div className="flex w-1/2 md-lg:w-full justify-center items-start flex-col gap-5">
              <h5 className="text-[43px] font-bold">who We Are!</h5>
              <p className="text-[#465b52] text-[16px] leading-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                mollitia doloremque quam deserunt aliquid perspiciatis illum
                fugit optio aperiam harum vitae velit obcaecati ea ex,
                blanditiis itaque adipisci voluptatem sint? Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Et dicta rerum suscipit
                nemo quae temporibus animi vitae asperiores accusamus mollitia?
              </p>
              <abbr className="text-[#000] text-[16px] leading-4" title="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus autem ad doloremque, suscipit nulla eligendi natus
                nostrum earum optio illum sint fugiat voluptates error! Eos
                ipsum illo explicabo quo maiores.
              </abbr>
              <div className="bg-[#ccc]">
                <Marquee>
                  I can be a React component, multiple React components, or just
                  some text.
                </Marquee>
              </div>
            </div>
          </div>
          <div className="text-center flex justify-center items-center flex-col">
            <h2 className=" text-[50px] font-bold my-4">Download Our App</h2>
            <video
              className="w-[70%] h-full rounded-3xl"
              autoPlay
              muted
              loop
              src={video}
            ></video>
          </div>
        </div>
        <Footer />
      </>
    );
};

export default About;