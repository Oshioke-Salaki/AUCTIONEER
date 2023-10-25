import { createPortal } from 'react-dom';
import nft from '../assets/nft.png';
import BidModal from '../ui/BidModal';
import Navbar from '../ui/Navbar';
import OwnerSub from '../ui/OwnerSub';
import TopAuctions from '../ui/TopAuctions';
import { useState } from 'react';

export default function NFTDetails() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="relative">
      {showModal &&
        createPortal(<BidModal toggleModal={setShowModal} />, document.body)}
      <Navbar />
      <div className="flex justify-center items-center gap-x-[20px] mt-8">
        <input
          type="text"
          className="text-center py-4 w-[500px] rounded-[10px] bg-ash100 text-ash200 text-base font-normal"
          placeholder="Search"
        />
        <button className="py-[11px] px-[41px] bg-[#3A3A3A] border-[2px] border-solid border-white rounded-[10px] text-white text-base font-extrabold">
          Create
        </button>
      </div>
      <div className="grid grid-cols-[1fr_1fr] gap-x-[40px] px-[80px] h-fit mt-8">
        <img src={nft} alt="" className="w-full h-full" />
        <div className="py-[20px] px-[30px] rounded-[20px] flex flex-col border-solid h-full border-[0.2px] border-[#3A3A3A] bg-ash300">
          <h1 className="text-black text-[38px] font-semibold">
            The Rain Forest
          </h1>
          <h2 className="text-ash400 text-xl font-semibold">
            Created by @Mankiniboss
          </h2>
          <div className="flex justify-between mt-[13px] items-center mb-[34px]">
            <div className="flex flex-col gap-y-[10px]">
              <h2 className="text-xl text-[#A6A2A2] font-semibold">
                Starting Price
              </h2>
              <h3 className="text-[38px] font-bold text-[#3A3A3A]">0.45 ETH</h3>
            </div>
            <div className="flex flex-col gap-y-[10px]">
              <h2 className="text-xl text-[#A6A2A2] font-semibold">
                Auction ends in
              </h2>
              <h3 className="text-[38px] font-bold text-[#3A3A3A]">12:47:08</h3>
            </div>
          </div>
          <h2 className="text-black text-2xl font-semibold mb-4">
            Description
          </h2>
          <p className="text-[18px] font-normal text-[#3A3A3A] mb-[41px]">
            The philosopher Seneca said “loneliness is not being alone, but
            being empty” and that&apos;s something I realized very young.
            Contrary to what most of us are taught, I believe being alone can be
            a good thing, and this notion is the basis for Solitude, which aims
            to explore feelings of lonesomeness in tandem with spiritual
            connections within the natural world.
          </p>
          <button
            className="px-[100px] py-5 text-white text-2xl font-extrabold rounded-[10px] border-solid border-[2px] bg-[#121212] border-white self-center"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setShowModal(true);
            }}
          >
            Place Bid
          </button>
        </div>
      </div>
      <div className="w-full px-[80px] mb-[108px]">
        <div className="mt-[86px] w-full grid grid-cols-[1fr_1fr] bg-ash300 border-solid border-[0.2px] border-[#3A3A3A] pt-[20px] pb-[70px] pl-[47px] pr-[29px] rounded-[20px]">
          <div>
            <h1 className="text-black text-[38px] font-semibold mb-5">
              History
            </h1>
            <OwnerSub />
            <ol className="mt-[23px] flex flex-col gap-y-2 text-ash400 text-2xl font-semibold">
              <li>1st bid - 22:00</li>
              <li>2nd bid - 22:09</li>
              <li>3rd bid - 22:26</li>
              <li>4th bid - 22:50</li>
            </ol>
          </div>
          <div>
            <h1 className="text-black text-[38px] font-semibold mb-5">
              Information
            </h1>
            <div className="grid grid-cols-[1fr_1fr] gap-x-[46px] gap-y-6 text-ash400 text-2xl font-normal">
              <h6>
                Artist <span className="text-black">- Mankiniboss</span>
              </h6>
              <h6>
                Collection <span className="text-black">- Road to victory</span>
              </h6>
              <h6>
                File size <span className="text-black">- 23mb</span>
              </h6>
              <h6>
                Licence <span className="text-black">- Mankiniboss 100%</span>
              </h6>
              <h6 className="col-span-full">
                Meduim <span className="text-black">- Non -Fungible Token</span>
              </h6>
              <h6 className="col-span-full">
                Year <span className="text-black">- 2023</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
      <TopAuctions />
    </div>
  );
}
