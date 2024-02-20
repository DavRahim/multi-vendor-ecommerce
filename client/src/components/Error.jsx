import { BiArrowFromRight } from "react-icons/bi";
import { FcHighPriority } from "react-icons/fc";
import { Link } from "react-router-dom";
import FeatureProducts from "./products/FeatureProducts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { get_products } from "../store/Reducers/homeReducer";

const Error = () => {
    const dispatch = useDispatch();
    const { products } =
      useSelector((state) => state.home);
       useEffect(() => {
         dispatch(get_products());
       }, [dispatch]);
    return (
      <div className="w-full ">
        <div className="flex justify-start items-center gap-3 w-full bg-[#088178] p-4 text-xl text-white">
          <Link to={"/"}>
            <BiArrowFromRight />
          </Link>
          <h4>Page Not Found</h4>
        </div>
        <div className="flex justify-center items-center flex-col">
          <FcHighPriority size={300} />
          <p className="text-center">
            Something went wrong. <br /> Please check your connection <br /> and
            try again.
          </p>
        </div>
        <div className="flex justify-center mt-10 items-center">
          <Link
            to="/"
            className="p-2 rounded bg-[#088178] text-white uppercase px-4 font-bold text-sm"
          >
            Back to home page
          </Link>
        </div>
        <div className="mt-10">
          <h3 className="text-2xl ml-4">Just for you</h3>
          <FeatureProducts title={""} header={""} products={products} />
        </div>
      </div>
    );
};

export default Error;