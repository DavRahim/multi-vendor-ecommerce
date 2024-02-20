import { useEffect, useState } from "react";
import Search from "../components/Search";
import Pagination from "../Pagination";
import { FaEdit, FaEye, FaLocationArrow, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_Products } from "../../store/reducers/productReducer";

const Products = () => {
  const dispatch = useDispatch();
  const { products, totalProducts } = useSelector((state) => state.product);
  const [parPage, setParPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const obj = {
      parPage: parseInt(parPage),
      page: parseInt(currentPage),
      searchValue,
    };
    dispatch(get_Products(obj));
  }, [searchValue, currentPage, parPage, dispatch]);

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-[#283046] rounded-md">
        <Search setParPage={setParPage} setSearchValue={setSearchValue} />
        <div className="relative overflow-x-auto mt-5">
          <table className="w-full text-sm text-left text-[#d0d2d6]">
            <thead className="text-sm uppercase  border-b border-slate-700 text-[#d0d2d6]">
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
                  Category
                </th>
                <th scope="col" className="py-1 px-4">
                  Brand
                </th>
                <th scope="col" className="py-1 px-4">
                  Price
                </th>
                <th scope="col" className="py-1 px-4">
                  Discount
                </th>
                <th scope="col" className="py-1 px-4">
                  Stock
                </th>
                <th scope="col" className="py-1 px-4">
                  Active
                </th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.length > 0 &&
                products?.map((p, i) => (
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
                        src={p?.images[0]}
                        alt=""
                      />
                    </td>
                    <td
                      scope="row"
                      className="py-1 px-4 font-medium whitespace-nowrap"
                    >
                      <span>{p?.name?.slice(0, 16)} ...</span>
                    </td>
                    <td
                      scope="row"
                      className="py-1 px-4 font-medium whitespace-nowrap"
                    >
                      <span>{p?.category}</span>
                    </td>
                    <td
                      scope="row"
                      className="py-1 px-4 font-medium whitespace-nowrap"
                    >
                      <span>{p?.brand}</span>
                    </td>
                    <td
                      scope="row"
                      className="py-1 px-4 font-medium whitespace-nowrap"
                    >
                      <span>${p?.price}</span>
                    </td>
                    <td
                      scope="row"
                      className="py-1 px-4 font-medium whitespace-nowrap"
                    >
                      {p?.discount === 0 ? (
                        <span>No Discount Bro</span>
                      ) : (
                        <span>{p?.discount}%</span>
                      )}
                    </td>
                    <td
                      scope="row"
                      className="py-1 px-4 font-medium whitespace-nowrap"
                    >
                      <span>{p?.stock}</span>
                    </td>

                    <td
                      scope="row"
                      className="py-1 px-6 font-medium whitespace-nowrap"
                    >
                      <div className="flex justify-start items-center gap-4 ">
                        <Link
                          to={`/seller/dashboard/edit-product/${p?._id}`}
                          className="p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50"
                        >
                          <FaEdit />
                        </Link>
                        <Link className="p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-red-500/50">
                          <FaEye />
                        </Link>
                        <button className="p-[6px] bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50">
                          <FaTrash />
                        </button>
                        <Link
                          to={`/seller/dashboard/add-banners/${p?._id}`}
                          className="p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-red-500/50"
                        >
                          <FaLocationArrow />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {totalProducts <= parPage ? (
          ""
        ) : (
          <div className="w-full flex justify-end mt-4 bottom-4 right-4">
            <Pagination
              pageNumber={currentPage}
              setPageNumber={setCurrentPage}
              totalItem={50}
              parPage={parPage}
              showItem={3}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
