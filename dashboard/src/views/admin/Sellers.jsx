import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import image from "../../assets/1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { get_active_sellers } from "../../store/reducers/SellerReducer";

const Sellers = () => {
     const dispatch = useDispatch();
    const [parPage, setParPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState("");
    const [show, setShow] = useState(false);
      const { sellers, totalSellers } = useSelector((state) => state.seller);

    useEffect(() => {
      const obj = {
        parPage: parseInt(parPage),
        page: parseInt(currentPage),
        searchValue,
      };
      dispatch(get_active_sellers(obj));
    }, [searchValue, currentPage, parPage]);
    // console.log(sellers);

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
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
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
                  Image
                </th>
                <th scope="col" className="py-1 px-4">
                  Name
                </th>
                <th scope="col" className="py-1 px-4">
                  Shop Name
                </th>
                <th scope="col" className="py-1 px-4">
                  payment Status
                </th>
                <th scope="col" className="py-1 px-4">
                  email
                </th>
                <th scope="col" className="py-1 px-4">
                  Devision
                </th>
                <th scope="col" className="py-1 px-4">
                  District
                </th>
                <th scope="col" className="py-1 px-4">
                  Active
                </th>
              </tr>
            </thead>
            <tbody className="text-sm font-normal">
              {/* row */}
              {sellers.map((d, i) => (
                <tr key={i}>
                  <td
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    {i + 1}
                  </td>
                  <td
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    <img
                      className="w-[45px] h-[45px]"
                      src={d?.image ? d?.image : image}
                      alt=""
                    />
                  </td>
                  <td
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    <span>{d.name}</span>
                  </td>
                  <td
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    <span>{d.shopInfo?.shopName}</span>
                  </td>
                  <td
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    <span>{d.status}</span>
                  </td>
                  <td
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    <span>{d.email}</span>
                  </td>
                  <td
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    <span>{d.shopInfo?.division}</span>
                  </td>
                  <td
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    <span>{d.shopInfo?.district}</span>
                  </td>
                  <td
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    <div className="flex justify-start items-center gap-4">
                      <Link
                        to={`/admin/dashboard/seller/details/${d._id}`}
                        className="p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50"
                      >
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
          {totalSellers <= parPage ? (
            <div className="w-full flex justify-end mt-4 bottom-4 right-4">
              <Pagination
                pageNumber={currentPage}
                setPageNumber={setCurrentPage}
                totalItem={totalSellers}
                parPage={parPage}
                showItem={4}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Sellers;
