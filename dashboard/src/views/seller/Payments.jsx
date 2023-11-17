import { forwardRef, useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { FixedSizeList as List } from "react-window";

const handleOnWheel = (deltaY) => {
  console.log("handleOnWheel", deltaY);
};
const outerElementType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={handleOnWheel} {...props} />
));

const row = ({ index, style }) => {
  return (
    <div style={style} className="flex text-sm">
      <div className="w-[25%] p-2 whitespace-nowrap ">{index + 1}</div>
      <div className="w-[25%] p-2 whitespace-nowrap ">$450</div>
      <div className="w-[25%] p-2 whitespace-nowrap ">
        <span className="py-[1px] px-[5px] bg-slate-700 text-blue-500 rounded-md text-xs">
          pending
        </span>
      </div>
      <div className="w-[25%] p-2 whitespace-nowrap ">12-jun-2030</div>
    </div>
  );
};

const Payments = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="px-2 md:px-7 py-5">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#d0d2d6]">
            <h2 className="text-lg font-bold">$6566</h2>
            <span className="text-sm font-medium">Total Sales</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#28c76f1f] flex justify-center items-center text-xl">
            <BsCurrencyDollar className="text-[#28c76f] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#d0d2d6]">
            <h2 className="text-3xl font-bold">$20</h2>
            <span className="text-sm font-normal">Available Amount</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#e000e81f] flex justify-center items-center text-xl">
            <BsCurrencyDollar className="text-[#cd00e8] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#d0d2d6]">
            <h2 className="text-3xl font-bold">$50</h2>
            <span className="text-sm font-normal">Withdrawal Amount</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#00cfe81f] flex justify-center items-center text-xl">
            <BsCurrencyDollar className="text-[#00cfe8] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#d0d2d6]">
            <h2 className="text-3xl font-bold">$12</h2>
            <span className="text-sm font-normal">pending Amount</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#7367f01f] flex justify-center items-center text-xl">
            <BsCurrencyDollar className="text-[#7367f0] shadow-lg" />
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 pb-4">
        <div className="bg-[#283046] text-[#d0d2d6] rounded-md p-5">
          <h2 className="text-lg">Send Request</h2>
          <div className="py-5">
            <form action="">
              <div className="flex gap-3 flex-wrap">
                <input
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6] md:w-[79%]"
                  type="number"
                  min={0}
                  placeholder="Amount"
                />
                <button className="bg-indigo-500 text-[#d0d2d6] hover:shadow-blue-500/50 hover:shadow-lg hover:text-white rounded-sm px-4 py-2 text-sm">
                  Send
                </button>
              </div>
            </form>
          </div>
          <div>
            <h2 className="text-lg pb-4">Pending request</h2>
            <div className="w-full overflow-x-auto">
              <div className="flex rounded-sm bg-[#161d31] uppercase text-xs min-w-[340px]  text-[#d0d2d6] ">
                <div className="w-[25%] p-2 ">No</div>
                <div className="w-[25%] p-2 ">Amount</div>
                <div className="w-[25%] p-2 ">Status</div>
                <div className="w-[25%] p-2 ">Date</div>
              </div>
              {
                <List
                  style={{ minWidth: "340px", overflowX: "hidden" }}
                  className="List"
                  height={350}
                  itemCount={100}
                  itemSize={35}
                  outerElementType={outerElementType}
                >
                  {row}
                </List>
              }
            </div>
          </div>
        </div>
        <div className="bg-[#283046] text-[#d0d2d6] rounded-md p-5">
          <div>
            <h2 className="text-lg pb-4">Succuss Withdrawal</h2>
            <div className="w-full overflow-x-auto">
              <div className="flex rounded-sm bg-[#161d31] uppercase text-xs min-w-[340px]  text-[#d0d2d6] ">
                <div className="w-[25%] p-2 ">No</div>
                <div className="w-[25%] p-2 ">Amount</div>
                <div className="w-[25%] p-2 ">Status</div>
                <div className="w-[25%] p-2 ">Date</div>
              </div>
              {
                <List
                  style={{ minWidth: "340px", overflowX: "hidden" }}
                  className="List"
                  height={350}
                  itemCount={100}
                  itemSize={35}
                  outerElementType={outerElementType}
                >
                  {row}
                </List>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
