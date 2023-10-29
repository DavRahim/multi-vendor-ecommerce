import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

const Pagination = ({
  pageNumber,
  totalItem,
  parPage,
  showItem,
  setPageNumber,
}) => {
  let totalPage = Math.ceil(totalItem / parPage);
  let startPage = pageNumber;
  let dif = totalPage - pageNumber;

  if (dif <= showItem) {
    startPage = totalPage - showItem;
  }
  let endPage = startPage<0 ? showItem : showItem + startPage


  if(startPage <= 0 ){
    startPage = 1
  }
  const createBtn = () =>{
       const btns = [];
       for (let i = startPage; i < endPage; i++) {
        btns.push(
          <li onClick={()=>setPageNumber(i)}
            className={`${
              pageNumber === i
                ? "bg-indigo-500 shadow-lg shadow-indigo-500/5"
                : "bg-slate-700 hover:bg-indigo-500 shadow-lg hover:shadow-indigo-500/5 hover:text-white cursor-pointer"
            } text-white  w-[33px] h-[33px] rounded-full flex justify-center items-center cursor-pointer`}
          >
            {i}
          </li>
        );
        
       }
       return btns;
  }

  return (
    <>
      <ul className="flex gap-3">
        {pageNumber > 1 && (
          <li
            onClick={() => setPageNumber(pageNumber - 1)}
            className="w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-700  text-[#d0d2d6] "
          >
            <BsChevronDoubleLeft />
          </li>
        )}
        {createBtn()}
        {pageNumber < totalPage && (
          <li
            onClick={() => setPageNumber(pageNumber + 1)}
            className="w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-700  text-[#d0d2d6] "
          >
            <BsChevronDoubleRight />
          </li>
        )}
      </ul>
    </>
  );
};

export default Pagination;
