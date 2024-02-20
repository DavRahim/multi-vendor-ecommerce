import { FaEye } from "react-icons/fa";
import Pagination from "../Pagination";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Search from "../components/Search";
import { get_seller_request } from "../../store/reducers/SellerReducer";

const SellerRequest = () => {
  const dispatch = useDispatch();
  const { sellers, totalSeller } = useSelector((state) => state.seller);
  // console.log(sellers);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  const [parPage, setParPage] = useState(5);

  useEffect(() => {
    dispatch(
      get_seller_request({
        parPage,
        searchValue,
        page: currentPage,
      })
    );
  }, [parPage, searchValue, currentPage]);
  return (
    <div className="px-2 lg:px-7 pt-5 ">
      <div className="w-full p-4 bg-[#283046] rounded-md ">
        <Search
          setParPage={setParPage}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />

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
              {sellers &&
                sellers.length > 0 &&
                sellers.map((d, i) => (
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
                      <span>{d.name}</span>
                    </td>
                    <td
                      scope="row"
                      className="py-2 px-4 font-normal whitespace-nowrap"
                    >
                      <span>{d.email}</span>
                    </td>
                    <td
                      scope="row"
                      className="py-2 px-4 font-normal whitespace-nowrap"
                    >
                      <span>{d.payment}</span>
                    </td>
                    <td
                      scope="row"
                      className="py-2 px-4 font-normal whitespace-nowrap"
                    >
                      <span>{d.status}</span>
                    </td>

                    <td
                      scope="row"
                      className="py-2 px-6 font-normal whitespace-nowrap"
                    >
                      <div className="flex justify-start items-center gap-4 ">
                        <Link
                          to={`/admin/dashboard/seller/details/${d._id}`}
                          className="p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-yellow-500/50"
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
          {totalSeller <= parPage ? (
            ""
          ) : (
            <div className="w-full flex justify-end mt-4 bottom-4 right-4">
              <Pagination
                pageNumber={currentPage}
                setPageNumber={setCurrentPage}
                totalItem={50}
                parPage={parPage}
                showItem={4}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SellerRequest;
