

import man from '../../assets/admin.jpg'

const SellerDetails = () => {
  return (
    <div className="px-2 lg:px-7 pt-5 ">
      <div className="w-full p-4 bg-[#283046] rounded-md ">
        <div className="w-full flex flex-wrap text-[#d0d2d6]">
          <div className="w-3/12 flex justify-center items-center py-3">
            <div>
              <img className='w-full h-[230px]' src={man} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDetails;
