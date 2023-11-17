import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import img1 from "../assets/Banner/1.jpg";
import img2 from "../assets/Banner/2.jpg";
import img3 from "../assets/Banner/3.jpg";
import img4 from "../assets/Banner/4.jpg";
import img5 from "../assets/Banner/5.jpg";
import img6 from "../assets/Banner/6.jpg";
import img7 from "../assets/Banner/7.jpg";
const Banner = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const img = [img1, img2, img3, img4, img5, img6, img7];
  console.log(img);
  return (
    <div className="w-full md-lg:mt-6">
      <div className="w-[85%] lg:w-[90%] mx-auto">
        <div className="w-full flex flex-wrap md-lg:gap-8">
          <div className="w-full">
            <div className="my-8">
              <Carousel
                autoPlay={true}
                infinite={true}
                arrows={true}
                showDots={true}
                responsive={responsive}
              >
                {img?.map((oo, i) => (
                  <Link
                    className="lg-md:h-[440px] h-auto w-full block"
                    key={i}
                    to="#"
                  >
                    <img src={oo} alt="banner" />
                  </Link>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
