import { Link } from "react-router-dom";

const SearchValues = ({ searchData }) => {
  return (
    <>
      {searchData && searchData.length !== 0 ? (
        <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
          {searchData &&
            searchData.map((i, index) => {
              return (
                <Link key={index} to={`/product/details/${i.slug}`}>
                  <div className="w-full flex items-start-py-3">
                    <img
                      src={`${i.images[0]}`}
                      alt=""
                      className="w-[40px] h-[40px] mr-[10px]"
                    />
                    <h1>{i.name}</h1>
                  </div>
                </Link>
              );
            })}
        </div>
      ) : null}
    </>
  );
};

export default SearchValues;