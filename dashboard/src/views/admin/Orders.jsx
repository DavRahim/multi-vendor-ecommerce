import { useState } from "react";
import { BsArrowBarDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // const [searchValue, setSearchValue] = useState("");
  const [parPage, setParPage] = useState(5);
  const [show, setShow] = useState(false);
  return (
    <div className="px-2 lg:px-7 pt-5 ">
      <div className="w-full p-4 bg-[#283046] rounded-md">
        <div className="flex justify-between items-center">
          <select
            onChange={(e) => setParPage(parseInt(e.target.value))}
            className="px-4 py-2 hover:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6] "
          >
            <option value="5">5</option>
            <option value="15">15</option>
            <option value="25">25</option>
          </select>
          <input
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6] "
            type="text"
            placeholder="search"
          />
        </div>
        <div className="relative mt-5 overflow-x-auto">
          <div className="w-full text-sm text-left text-[#d0d2d6]">
            <div className=" text-[#d0d2d6] text-sm uppercase border-b border-slate-700">
              <div className="flex justify-between items-start">
                <div className="py-3 w-[25%]">Order Id</div>
                <div className="py-3 w-[13%]">Price</div>
                <div className="py-3 w-[18%]">payment status</div>
                <div className="py-3 w-[18%]">order status</div>
                <div className="py-3 w-[18%]">Action</div>
                <div className="py-3 w-[8%]">
                  <BsArrowBarDown />
                </div>
              </div>
            </div>
            <div className=" text-[#d0d2d6]">
              <div className="flex justify-between items-start border-b border-slate-700">
                <div className="py-4 w-[25%] font-medium whitespace-nowrap">
                  #23490234
                </div>
                <div className="py-4 w-[14%] font-medium whitespace-nowrap ">
                  $348
                </div>
                <div className="py-4 w-[18%]">pending</div>
                <div className="py-4 w-[18%]">pending</div>
                <div className="py-4 w-[18%]">
                  <Link>view</Link>
                </div>
                <div onClick={() => setShow(!show)} className="py-4 w-[8%]">
                  <BsArrowBarDown />
                </div>
              </div>
            </div>
            {/* sub */}
            <div
              className={
                show ? "block border-b border-slate-700 bg-slate-800" : "hidden"
              }
            >
              <div className="flex justify-start items-start border-b border-slate-700 px-2">
                <div className="py-4 w-[25%] font-medium whitespace-nowrap pl-3">
                  #23490234
                </div>
                <div className="py-4 w-[14%] font-medium whitespace-nowrap">
                  $348
                </div>
                <div className="py-4 w-[18%]">pending</div>
                <div className="py-4 w-[18%]">pending</div>
              </div>
              <div className="flex justify-start items-start border-b border-slate-700 px-2">
                <div className="py-4 w-[25%] font-medium whitespace-nowrap pl-3">
                  #23490234
                </div>
                <div className="py-4 w-[14%] font-medium whitespace-nowrap">
                  $348
                </div>
                <div className="py-4 w-[18%]">pending</div>
                <div className="py-4 w-[18%]">pending</div>
              </div>
            </div>
            <div className=" text-[#d0d2d6]">
              <div className="flex justify-between items-start border-b border-slate-700">
                <div className="py-4 w-[25%] font-medium whitespace-nowrap">
                  #23490234
                </div>
                <div className="py-4 w-[14%] font-medium whitespace-nowrap ">
                  $348
                </div>
                <div className="py-4 w-[18%]">pending</div>
                <div className="py-4 w-[18%]">pending</div>
                <div className="py-4 w-[18%]">
                  <Link>view</Link>
                </div>
                <div onClick={() => setShow(!show)} className="py-4 w-[8%]">
                  <BsArrowBarDown />
                </div>
              </div>
            </div>
            {/* sub */}
            <div
              className={
                show ? "block border-b border-slate-700 bg-slate-800" : "hidden"
              }
            >
              <div className="flex justify-start items-start border-b border-slate-700 px-2">
                <div className="py-4 w-[25%] font-medium whitespace-nowrap pl-3">
                  #23490234
                </div>
                <div className="py-4 w-[14%] font-medium whitespace-nowrap">
                  $348
                </div>
                <div className="py-4 w-[18%]">pending</div>
                <div className="py-4 w-[18%]">pending</div>
              </div>
              <div className="flex justify-start items-start border-b border-slate-700 px-2">
                <div className="py-4 w-[25%] font-medium whitespace-nowrap pl-3">
                  #23490234
                </div>
                <div className="py-4 w-[14%] font-medium whitespace-nowrap">
                  $348
                </div>
                <div className="py-4 w-[18%]">pending</div>
                <div className="py-4 w-[18%]">pending</div>
              </div>
            </div>
            {/* sun */}
          </div>
        </div>
        <div className="w-full flex justify-end mt-4 bottom-4 right-4">
          <Pagination
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            totalItem={50}
            parPage={parPage}
            showItem={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Orders;
