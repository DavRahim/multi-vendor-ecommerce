import image from "../../assets/2.jpg";

const OderDetails = () => {
  return (
    <div className="px-2 lg:px-7 pt-5 ">
      <div className="w-full p-4 bg-[#283046] rounded-md">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl text-[#d0d2d6] ">Order Details</h2>
          <select className="px-4 py-2 hover:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6] ">
            <option value="">Pending</option>
            <option value="">Processing</option>
            <option value="">warehouse</option>
            <option value="">placed</option>
            <option value="">cancelled</option>
          </select>
        </div>
        <div className="p-4">
          <div className="flex gap-2 text-lg  text-[#d0d2d6]">
            <h2>#agjv2345</h2>
            <span>3 jun 2023</span>
          </div>
          <div className="flex flex-wrap ">
            <div className="w-[32%]">
              <div className="pr-3 text-[#d0d2d6] text-lg">
                <div className="flex flex-col gap-1">
                  <h2 className="pb-2 font-semibold">
                    Deliver to: Abdur Rahim
                  </h2>
                  <p>
                    <span className="text-sm">
                      jamalpur, jamlpur sadar, narundi, dowatola
                    </span>
                  </p>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <h2 className="">Payment status:</h2>
                  <span className="text-base">paid</span>
                </div>
                <span>Price: $4687</span>
                <div className="mt-4 flex  flex-col gap-4">
                  <div className="text-[#d0d2d6]">
                    <div className="flex items-center gap-3 text-md">
                      <img className="w-[45px] h-[45px]" src={image} alt="" />
                      <div>
                        <h2>long long t-shart</h2>
                        <p>
                          <span>Brand: </span>
                          <span>Easy </span>
                          <span className="text-lg"> Quantity : 2</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-md">
                      <img className="w-[45px] h-[45px]" src={image} alt="" />
                      <div>
                        <h2>long long t-shart</h2>
                        <p>
                          <span>Brand : </span>
                          <span>Easy </span>
                          <span className="text-lg"> Quantity : 2</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-md">
                      <img className="w-[45px] h-[45px]" src={image} alt="" />
                      <div>
                        <h2>long long t-shart</h2>
                        <p>
                          <span>Brand: </span>
                          <span>Easy </span>
                          <span className="text-lg"> Quantity: 2</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[68%]">
              <div className="mt-4 flex flex-col">
                <div className="text-[#d0d2d6] mb-6">
                  <div className="flex justify-start items-center gap-3">
                    <h2>Seller 1 Order</h2>
                    <span>pending</span>
                  </div>
                  <div className="flex items-center gap-3 text-md mt-2">
                    <img className="w-[45px] h-[45px]" src={image} alt="" />
                    <div>
                      <h2>long long t-shart</h2>
                      <p>
                        <span>Brand : </span>
                        <span>Easy </span>
                        <span className="text-lg"> Quantity : 2</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-[#d0d2d6] ">
                  <div className="flex justify-start items-center gap-3">
                    <h2>Seller 2 Order</h2>
                    <span>pending</span>
                  </div>
                  <div className="flex items-center gap-3 text-md mt-2">
                    <img className="w-[45px] h-[45px]" src={image} alt="" />
                    <div>
                      <h2>long long t-shart</h2>
                      <p>
                        <span>Brand : </span>
                        <span>Easy </span>
                        <span className="text-lg"> Quantity : 2</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OderDetails;
