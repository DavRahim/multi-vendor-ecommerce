import { Link } from "react-router-dom";

const AllBanners = () => {
    return (
      <div className="px-2 lg:px-7 pt-5 ">
        <div className="w-full p-4 bg-[#283046] rounded-md ">
          <div className="flex justify-between items-center pb-4 ">
            <h1 className="text-[#d0d2d6] text-xl font-semibold">
              Add Product
            </h1>
            <Link
              className="bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg hover:text-white rounded-md px-7 py-2 my-2"
              to={"/seller/dashboard/products"}
            >
              Products
            </Link>
          </div>
        </div>
      </div>
    );
};

export default AllBanners;