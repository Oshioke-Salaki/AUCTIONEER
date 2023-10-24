import top1 from '../assets/top1.png';
import top2 from '../assets/top2.png';
import top3 from '../assets/top3.png';
import OwnerMain from './OwnerMain';

function TopAuctions() {
  return (
    <div className="bg-[#0C0217] px-[80px] pt-6 pb-[75px]">
      <h1 className="text-[38px] text-white font-semibold mb-[45px]">
        Top Auctions
      </h1>
      <div className="grid grid-cols-[1fr_1fr_1fr] gap-x-[23px]">
        <div className="relative flex flex-col h-[520px] py-[45px] px-[24px] ">
          <div className="absolute inset-0 bg-overlay z-[10]"></div>
          <img
            src={top1}
            alt=""
            className="absolute inset-0 w-full h-full z-[5]"
          />
          <div className="z-[40] text-white flex flex-col w-full">
            <OwnerMain />
            <div className="flex flex-col gap-y-3 mt-[63px]">
              <h2 className="text-[#F5F5F5] text-xl font-semibold">
                Starting Price
              </h2>
              <h1 className="text-[38px] font-extrabold">0.45 ETH</h1>
              <h2 className="text-[#F5F5F5] text-xl font-semibold">
                Auction date
              </h2>
              <h1 className="text-2xl font-bold">21-12-2023</h1>
            </div>
            <button className="py-[15px] self-center px-[30px] bg-white rounded-[5px] text-[22px] font-extrabold text-[#3A3A3A] mt-[63px]">
              Enter Auction
            </button>
          </div>
        </div>
        <div className="relative flex flex-col h-[520px] py-[45px] pl-[24px] pr-[64px]">
          <div className="absolute inset-0 bg-overlay z-[10]"></div>
          <div className="z-[40] text-white flex flex-col w-full">
            <OwnerMain />
            <div className="flex flex-col gap-y-3 mt-[63px]">
              <h2 className="text-[#F5F5F5] text-xl font-semibold">
                Starting Price
              </h2>
              <h1 className="text-[38px] font-extrabold">1.21 ETH</h1>
              <h2 className="text-[#F5F5F5] text-xl font-semibold">
                Auction date
              </h2>
              <h1 className="text-2xl font-bold">21-12-2023</h1>
            </div>
            <button className="py-[15px] self-center px-[30px] bg-white rounded-[5px] text-[22px] font-extrabold text-[#3A3A3A] mt-[63px]">
              Enter Auction
            </button>
          </div>
          <img src={top2} alt="" className="absolute inset-0 w-full h-full" />
        </div>
        <div className="relative flex flex-col h-[520px] py-[45px] pl-[24px] pr-[64px]">
          <img src={top3} alt="" className="absolute inset-0 w-full h-full" />
          <div className="absolute inset-0 bg-overlay z-[10]"></div>
          <div className="z-[40] text-white flex flex-col w-full">
            <OwnerMain />
            <div className="flex flex-col gap-y-3 mt-[63px]">
              <h2 className="text-[#F5F5F5] text-xl font-semibold">
                Starting Price
              </h2>
              <h1 className="text-[38px] font-extrabold">3.56 ETH</h1>
              <h2 className="text-[#F5F5F5] text-xl font-semibold">
                Auction date
              </h2>
              <h1 className="text-2xl font-bold">21-12-2023</h1>
            </div>
            <button className="py-[15px] self-center px-[30px] bg-white rounded-[5px] text-[22px] font-extrabold text-[#3A3A3A] mt-[63px]">
              Enter Auction
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopAuctions;
