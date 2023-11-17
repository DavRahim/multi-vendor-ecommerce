import avatar from "../../assets/admin.jpg";

const SellerToSupport = () => {
  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full bg-[#283046] px-4 py-4 rounded-md h-[calc(100vh-140px)]">
        <div className="flex w-full h-full relative">
          <div className="w-full">
            <div className="flex justify-between items-center">
              <div className="flex justify-start items-center gap-3">
                <div className="relative">
                  <img
                    className="w-[42px] h-[42px] border-green-500 border-2 max-w-[42px] p-[2px] rounded-full"
                    src={avatar}
                    alt=""
                  />
                  <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0"></div>
                </div>
                <h2 className="text-base font-semibold text-white">Support</h2>
              </div>
            </div>
            <div className="py-4 ">
              <div className="bg-slate-800 h-[calc(100vh-290px)] rounded-md p-3 overflow-y-auto">
                <div className="w-full flex justify-start items-center">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                    <div>
                      <img
                        className="w-[38px] h-[38px] border-white border-2 max-w-[38px] p-[2px] rounded-full"
                        src={avatar}
                        alt=""
                      />
                    </div>
                    <div className="flex justify-center items-center flex-col w-full bg-orange-500 shadow-lg shadow-orange-500/50 text-white py-1 px-2 rounded-sm ">
                      <span>How are you?</span>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-end items-center">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                    <div className="flex justify-center items-center flex-col w-full bg-blue-500 shadow-lg shadow-blue-500/50 text-white py-1 px-2 rounded-sm ">
                      <span>How are you?</span>
                    </div>
                    <div>
                      <img
                        className="w-[38px] h-[38px] border-white border-2 max-w-[38px] p-[2px] rounded-full"
                        src={avatar}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form className="flex gap-3">
              <input
                className="w-full flex justify-between px-2 border border-slate-700 items-center py-[5px] focus:border-blue-500 rounded-md outline-none bg-transparent text-[#d0d2d5]"
                type="text"
                placeholder="type your message"
              />
              <button className="bg-cyan-500 shadow-lg hover:shadow-cyan-500/50 rounded-md text-white font-semibold w-[75px] h-[35px] flex justify-center items-center">
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerToSupport;
