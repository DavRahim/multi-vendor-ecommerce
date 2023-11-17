import { Link } from "react-router-dom";
import Ratings from "./Ratings";
import RatingTemp from "./RatingTemp";
import Pagination from "./Pagination";
import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { AiFillStar } from "react-icons/ai";
import RatingReact from "react-rating";
import product1 from "../assets/products/1.webp";
import product2 from "../assets/products/2.webp";
import product3 from "../assets/products/3.webp";
import product4 from "../assets/products/4.webp";
import product5 from "../assets/products/5.webp";
import product6 from "../assets/products/6.webp";
import product7 from "../assets/products/7.webp";

const Reviews = () => {
     const [pageNumber, setPageNumber] = useState(1);
     const [parPage, setParPage] = useState(3);
     const totalReview = 30;
     const userInfo = true
     const [rat, setRat] = useState(1)
     const product = {
       _id: {
         $oid: "654a61f6cc4a8902178fb1c3",
       },
       sellerId: {
         $oid: "654534c3af0febfb13ebfef4",
       },
       name: "Remax RPP-28 Retro Mini Radio Power Bank - 9000MAh - Blue",
       slug: "sunslick-smapo",
       category: "mobile",
       brand: "smapo",
       price: 12,
       stock: 10,
       discount: 22,
       description:
         "Perfumes are a great way to help girls and boys feel fresh without the overpowering element of perfume or cologne. For men, apply the body spray on your chest and neck, and under your armpits. For women, apply the body spray on your pulse points, clothes, and hair. Body sprays are a great way to help girls and boys feel fresh without the overpowering element of perfume or cologne. For men, apply the body spray on your chest and neck, and under your armpits. For women, apply the body spray on your pulse points, clothes, and hair.",
       shopName: "Rahim sports",
       images: [
         product1,
         product2,
         product3,
         product4,
         product5,
         product6,
         product7,
         product4,
         product5,
         product6,
         product7,
       ],
       rating: 4,
       createdAt: {
         $date: "2023-11-07T16:12:38.954Z",
       },
       updatedAt: {
         $date: "2023-11-11T17:37:45.684Z",
       },
       __v: 0,
     };
    return (
      <div className="mt-8">
        <div className="flex gap-10 md:flex-col">
          <div className="flex flex-col gap-2 justify-start items-start py-4">
            <div>
              <span className="text-6xl font-semibold">{product.rating}</span>
              <span className="text-3xl font-semibold text-slate-600">/5</span>
            </div>
            <div className="flex text-4xl">
              <Ratings ratings={product.rating} />
            </div>
            <p className="text-sm text-slate-600">{totalReview} Reviews</p>
          </div>
          <div className="flex gap-2 flex-col py-4">
            <div className="flex justify-start items-center gap-5">
              <div className="text-md flex gap-1 w-[93px]">
                <RatingTemp rating={5} />
              </div>
              <div className="w-[200px] h-[14px] bg-slate-200 relative">
                {/* <div
                  style={{
                    width: `${Math.floor(
                      (100 * (rating_review[0]?.sum || 0)) / totalReview
                    )}%`,
                  }}
                  className="h-full bg-[#EDBB0E]"
                ></div> */}
                <div
                //   style={{
                //     width: `${Math.floor(
                //       (100 * (rating_review[0]?.sum || 0)) / totalReview
                //     )}%`,
                //   }}
                  className="h-full bg-[#EDBB0E]"
                ></div>
              </div>
              <p className="text-sm text-slate-600 w-[0%]">
                {/* {rating_review[0]?.sum} */}
                9
              </p>
            </div>
            <div className="flex justify-start items-center gap-5">
              <div className="text-md flex gap-1 w-[93px]">
                <RatingTemp rating={4} />
              </div>
              <div className="w-[200px] h-[14px] bg-slate-200 relative">
                <div
                //   style={{
                //     width: `${Math.floor(
                //       (100 * (rating_review[1]?.sum || 0)) / totalReview
                //     )}%`,
                //   }}
                  className="h-full bg-[#EDBB0E]"
                ></div>
              </div>
              <p className="text-sm text-slate-600 w-[0%]">
                {/* {rating_review[1]?.sum} */}
                2
              </p>
            </div>
            <div className="flex justify-start items-center gap-5">
              <div className="text-md flex gap-1 w-[93px]">
                <RatingTemp rating={3} />
              </div>
              <div className="w-[200px] h-[14px] bg-slate-200 relative">
                <div
                //   style={{
                //     width: `${Math.floor(
                //       (100 * (rating_review[2]?.sum || 0)) / totalReview
                //     )}%`,
                //   }}
                  className="h-full bg-[#EDBB0E]"
                ></div>
              </div>
              <p className="text-sm text-slate-600 w-[0%]">
                {/* {rating_review[2]?.sum} */}
                7
              </p>
            </div>
            <div className="flex justify-start items-center gap-5">
              <div className="text-md flex gap-1 w-[93px]">
                <RatingTemp rating={2} />
              </div>
              <div className="w-[200px] h-[14px] bg-slate-200 relative">
                <div
                //   style={{
                //     width: `${Math.floor(
                //       (100 * (rating_review[3]?.sum || 0)) / totalReview
                //     )}%`,
                //   }}
                  className="h-full bg-[#EDBB0E]"
                ></div>
              </div>
              <p className="text-sm text-slate-600 w-[0%]">
                {/* {rating_review[3]?.sum} */}
                5
              </p>
            </div>
            <div className="flex justify-start items-center gap-5">
              <div className="text-md flex gap-1 w-[93px]">
                <RatingTemp rating={1} />
              </div>
              <div className="w-[200px] h-[14px] bg-slate-200 relative">
                <div
                //   style={{
                //     width: `${Math.floor(
                //       (100 * (rating_review[4]?.sum || 0)) / totalReview
                //     )}%`,
                //   }}
                  className="h-full bg-[#EDBB0E]"
                ></div>
              </div>
              <p className="text-sm text-slate-600 w-[0%]">
                {/* {rating_review[4]?.sum} */}
                4
              </p>
            </div>
            <div className="flex justify-start items-center gap-5">
              <div className="text-md flex gap-1 w-[93px]">
                <RatingTemp rating={0} />
              </div>
              <div className="w-[200px] h-[14px] bg-slate-200 relative">
                <div className="h-full bg-[#EDBB0E] w-[0%]"></div>
              </div>
              <p className="text-sm text-slate-600 w-[0%]">0</p>
            </div>
          </div>
        </div>
        <h2 className="text-slate-600 text-xl font-bold py-5">
          Product Reviews {totalReview}
        </h2>
        <div className="flex flex-col gap-8 pb-10 pt-4">
          {[1, 2,3, 4].map((r, i) => (
            <div key={i} className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <div className="flex gap-1 text-xl">
                  <RatingTemp rating={3} />
                </div>
                <span className="text-slate-600">1 jun 2023</span>
              </div>
              <span className="text-slate-600 text-md">Abdur Rahim</span>
              <p className="text-slate-600 text-sm">Onik soundor product</p>
            </div>
          ))}
          <div className="flex justify-end">
            {totalReview > 5 && (
              <Pagination
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                totalItem={totalReview}
                perPage={parPage}
                showItem={Math.round(totalReview / 5)}
              />
            )}
          </div>
        </div>
        <div>
          {userInfo ? (
            <div className="flex flex-col gap-3">
              <div className="flex gap-1">
                <RatingReact
                  onChange={(e) => setRat(e)}
                  initialRating={rat}
                  emptySymbol={
                    <span className="text-slate-600 text-4xl">
                      <CiStar />
                    </span>
                  }
                  fullSymbol={
                    <span className="text-[#EDBB0E] text-4xl">
                      <AiFillStar />
                    </span>
                  }
                />
              </div>
              {/* <form onSubmit={review_submit}> */}
              <form>
                <textarea
                //   value={re}
                  required
                //   onChange={(e) => setRe(e.target.value)}
                  className="border outline-0 p-3 w-full"
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                ></textarea>
                <div className="mt-2">
                  <button className="py-1 px-5 bg-indigo-500 text-white rounded-sm">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div>
              <Link
                className="py-1 px-5 bg-indigo-500 text-white rounded-sm"
                to="/login"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    );
};

export default Reviews;