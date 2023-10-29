import { FaEye } from "react-icons/fa";
import Pagination from "../Pagination";
import { Link } from "react-router-dom";
import { useState } from "react";


const SellerRequest = () => {
    const [currentPage, setCurrentPage] = useState(1);
    // const [searchValue, setSearchValue] = useState("");
    const [parPage, setParPage] = useState(5);
    return (
      <div className="px-2 lg:px-7 pt-5 ">
        <div className="w-full p-4 bg-[#283046] rounded-md ">
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
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-[#d0d2d6]">
              <thead className="text-sm uppercase border-b border-slate-700 text-[#d0d2d6]">
                <tr>
                  <th scope="col" className="py-1 px-4">
                    No
                  </th>
                  <th scope="col" className="py-1 px-4">
                    Name
                  </th>
                  <th scope="col" className="py-1 px-4">
                    Email
                  </th>
                  <th scope="col" className="py-1 px-4">
                    payment Status
                  </th>
                  <th scope="col" className="py-1 px-4">
                    Status
                  </th>
                  <th scope="col" className="py-1 px-4">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* row */}
                {[1, 2, 3, 4, 5].map((d, i) => (
                  <tr className="border-b border-slate-700" key={i}>
                    <td
                      scope="row"
                      className="py-2 px-4 font-normal whitespace-nowrap "
                    >
                      {i + 1}
                    </td>
                    <td
                      scope="row"
                      className="py-2 px-4 font-normal whitespace-nowrap"
                    >
                      <span>Abdur Rahim</span>
                    </td>
                    <td
                      scope="row"
                      className="py-2 px-4 font-normal whitespace-nowrap"
                    >
                      <span>rahim@gmail.com</span>
                    </td>
                    <td
                      scope="row"
                      className="py-2 px-4 font-normal whitespace-nowrap"
                    >
                      <span>Active</span>
                    </td>
                    <td
                      scope="row"
                      className="py-2 px-4 font-normal whitespace-nowrap"
                    >
                      <span>deactive</span>
                    </td>

                    <td
                      scope="row"
                      className="py-2 px-6 font-normal whitespace-nowrap"
                    >
                      <div className="flex justify-start items-center gap-4 ">
                        <Link className="p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-yellow-500/50">
                          <FaEye />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}

                {/* row */}
              </tbody>
            </table>
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

export default SellerRequest;