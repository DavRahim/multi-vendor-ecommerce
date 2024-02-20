import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import Ratings from "../Ratings";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  add_to_card,
  add_to_wishlist,
  messageClear,
} from "../../store/Reducers/cardReducer";
import toast from "react-hot-toast";
import { useEffect } from "react";

const FeatureProducts = ({ title, header, products }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { successMessage, errorMessage } = useSelector((state) => state.card);

  const add_card = (id) => {
    if (userInfo) {
      dispatch(
        add_to_card({
          userId: userInfo.id,
          quantity: 1,
          productId: id,
        })
      );
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [errorMessage, successMessage]);

  const add_wishlist = (pro) => {
    dispatch(
      add_to_wishlist({
        userId: userInfo.id,
        productId: pro._id,
        name: pro.name,
        price: pro.price,
        image: pro.images[0],
        discount: pro.discount,
        rating: pro.rating,
        slug: pro.slug,
      })
    );
  };

  return (
    <div className="w-[85%] flex flex-wrap mx-auto">
      <div className="w-full">
        <div className="text-center flex justify-center items-center flex-col  relative pb-[45px]">
          <h2 className="text-4xl text-[#222] font-bold">{header}</h2>
          <p>{title}</p>
          <div className="w-[100px] h-[4px] bg-[#088178] mt-4 rounded"></div>
        </div>
      </div>
      <div className="w-full grid grid-cols-4 md-lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {products.map((p, i) => (
          <div
            key={i}
            className="group transition-all duration-500 hover:shadow-md  hover:-mt-3 p-2 border border-solid border-[#cce7d0] rounded-md "
          >
            <div className="relative overflow-hidden">
              {p.discount ? (
                <div className="flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-red-500 font-semibold text-xs left-2 top-2">
                  {p.discount} %
                </div>
              ) : (
                ""
              )}

              <img
                className="sm:w-full border border-[#cce7d0]  w-full h-[240px] object-contain rounded-md"
                src={p?.images[0]}
                alt="product image"
              />
              <ul className="flex transition-all duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3">
                <li
                  onClick={() => add_wishlist(p)}
                  className="w-[38px] h-[38px] border border-solid border-[#cce7d0]  cursor-pointer flex justify-center items-center rounded-full bg-[#e8f6ea]   text-[#088178] hover:text-white hover:bg-[#088178] hover:rotate-[720deg] transition-all"
                >
                  <AiFillHeart />
                </li>
                <Link
                  to={`/product/details/${p.slug}`}
                  className="w-[38px] h-[38px] border border-solid border-[#cce7d0]  cursor-pointer justify-center items-center rounded-full flex  bg-[#e8f6ea]   text-[#088178] hover:text-white hover:bg-[#088178] hover:rotate-[720deg] transition-all"
                >
                  <FaEye />
                </Link>
                <li
                  onClick={() => add_card(p?._id)}
                  className="w-[38px] h-[38px] cursor-pointer  justify-center items-center border border-solid border-[#cce7d0]  rounded-full flex bg-[#e8f6ea]   text-[#088178] hover:text-white hover:bg-[#088178] hover:rotate-[720deg] transition-all"
                >
                  <AiOutlineShoppingCart />
                </li>
              </ul>
            </div>
            <div className="py-3 text-slate-600 px-2">
              <h2>{p?.name}</h2>
              <div className="flex justify-start items-center gap-3">
                <div className=" font-bold flex gap-3 ">
                  {p.discount !== 0 ? (
                    <>
                      <span className="text-base font-bold line-through ">
                        $ {p?.price}
                      </span>
                      <span className="font-bold text-red-500 text-xl ">
                        ${p?.price - Math.floor((p?.price * p?.discount) / 100)}{" "}
                      </span>
                    </>
                  ) : (
                    <span className="text-lg font-bold text-red-500">
                      ${p?.price}
                    </span>
                  )}
                </div>
                <div className="flex">
                  <Ratings ratings={p?.rating} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureProducts;
