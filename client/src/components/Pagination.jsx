import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = ({
  pageNumber,
  setPageNumber,
  totalItem,
  parPage,
  showItem,
}) => {
  let totalPage = Math.ceil(totalItem / parPage);
  let startPage = pageNumber;

  let dif = totalPage - pageNumber;
  if (showItem > 6) {
    showItem = 5;
  }
  if (dif <= showItem) {
    startPage = totalPage - showItem;
  }
  let endPage = startPage < 0 ? showItem : showItem + startPage;

  if (startPage <= 0) {
    startPage = 1;
  }
  const createBtn = () => {
    const btns = [];

    for (let i = startPage; i < endPage; i++) {
      btns.push(
        <li
          onClick={() => setPageNumber(i)}
          className={`
                    ${
                      pageNumber === i
                        ? "text-center shadow-lg shadow-slate-300/50  bg-[#088178] px-[20px] py-[13px] rounded-md font-semibold text-white cursor-pointer"
                        : "text-center shadow-lg shadow-slate-300/50  bg-[#088178] px-[20px] py-[13px] rounded-md font-semibold text-white  cursor-pointer hover:bg-slate-300 hover:shadow-slate-300/50 hover:text-slate-800"
                    }rounded-full flex justify-center items-center cursor-pointer`}
        >
          {i}
        </li>
      );
    }
    return btns;
  };

  return (
    <ul className="flex gap-3 justify-center">
      {pageNumber > 1 && (
        <li
          onClick={() => setPageNumber(pageNumber - 1)}
          className="text-center shadow-lg shadow-slate-300/50  bg-[#088178] px-[20px] py-[13px] rounded-md font-semibold text-white cursor-pointer"
        >
          <FaArrowLeft />
        </li>
      )}
      {createBtn()}
      {pageNumber < totalPage && (
        <li
          onClick={() => setPageNumber(pageNumber + 1)}
          className="text-center shadow-lg shadow-slate-300/50  bg-[#088178] px-[20px] py-[13px] rounded-md font-semibold text-white cursor-pointer"
        >
          <FaArrowRight />
        </li>
      )}
    </ul>
  );
};

export default Pagination;
