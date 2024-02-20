import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { get_banners } from "../store/Reducers/homeReducer";
const Banner = () => {
  const dispatch = useDispatch();
  const { banners } = useSelector((state) => state.home);

 const responsive = {
   superLargeDesktop: {
     // the naming can be any, depends on you.
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
  useEffect(() => {
    dispatch(get_banners());
  }, [dispatch]);
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
                {banners &&
                  banners.length > 0 &&
                  banners?.map((oo, i) => (
                    <Link
                      className="h-[485px] md-lg:h-[205px] w-full block"
                      key={i}
                      to={`/product/details/${oo.link}`}
                    >
                      <img
                        className="h-full w-full object-cover"
                        src={oo.banner}
                        alt="banner"
                      />
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
