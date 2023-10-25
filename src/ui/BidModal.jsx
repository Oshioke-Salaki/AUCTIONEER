/* eslint-disable react/prop-types */
import closeBtn from '../assets/close.png';
import nft from '../assets/nft.png';
import avatar from '../assets/av.png';
function BidModal({ toggleModal }) {
  return (
    <div className="absolute inset-0 flex justify-center pt-[20px] bg-ash700 backdrop-blur-[5px]">
      <div className="flex flex-col gap-y-[5px] px-[80px]">
        <img
          src={closeBtn}
          className="self-end cursor-pointer"
          onClick={() => toggleModal(false)}
          alt=""
        />
        <div className="flex gap-x-[34px]">
          <div className="pt-[68px] pl-[43px] pr-[83px] pb-[49px] bg-white rounded-[20px] flex flex-col">
            <h1 className="text-black text-[38px] font-semibold mb-2">
              Place your bid
            </h1>
            <h2 className="text-ash400 text-xl font-semibold mb-[46px]">
              All unsuccessful bids are returned to your wallet
              <br />
              Goodluck!!
            </h2>
            <div className="relative h-fit w-full">
              <h3 className="text-white text-[40px] font-bold absolute py-[21px] px-[24px] bg-[#121212] border-ash700 border-solid rounded-[20px] border-[0.3px] h-full">
                ETH
              </h3>
              <input
                type="text"
                className="py-4 text-ash200 text-[50px] font-semibold pl-[161px] pr-7 w-full rounded-[20px] border-ash700 border-solid border-[0.3px] bg-[#F5F5F5]"
                placeholder="0.00"
              />
            </div>
            <div className="text-ash400 text-xl font-semibold flex justify-between items-center mt-4">
              <h4>Available balance</h4>
              <h4>30.124 ETH</h4>
            </div>
            <button className="px-[100px] py-5 text-white text-2xl font-extrabold rounded-[10px] border-solid border-[2px] bg-[#121212] border-white self-center mt-[40px]">
              Place Bid
            </button>
          </div>
          <div className="w-[557px] bg-[#121212] text-[#C3BDBD] text-2xl font-semibold rounded-[20px]">
            <img
              src={nft}
              className="w-full h-[385px] mb-[25px] rounded-t-[20px]"
              alt=""
            />
            <h5 className="mb-4 pl-[18px]">
              Status:{' '}
              <span className="text-white">You&apos;ve been out-bided</span>
            </h5>
            <h5 className="pl-[18px]">
              Duration: <span className="text-white">12:35:12</span>
            </h5>
            <div className="flex gap-x-[10px] items-center mt-[15px] pl-4">
              <img src={avatar} alt="" className="w-[30px] h-[30px]" />
              <h5 className="text-2xl font-semibold text-white">
                @Themankinibboss
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BidModal;
