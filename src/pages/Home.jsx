import Navbar from '../ui/Navbar';
import live1 from '../assets/live1.png';
import live2 from '../assets/live2.png';
import live3 from '../assets/live3.png';
import live4 from '../assets/live4.png';
import up1 from '../assets/up1.png';
import up2 from '../assets/up2.png';
import up3 from '../assets/up3.png';
import up4 from '../assets/up4.png';
import today1 from '../assets/today1.png';
import today2 from '../assets/today2.png';
import today3 from '../assets/today3.png';
import today4 from '../assets/today4.png';
import new1 from '../assets/new1.png';
import new2 from '../assets/new2.png';
import new3 from '../assets/new3.png';
import new4 from '../assets/new4.png';
import TopAuctions from '../ui/TopAuctions';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div>
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
      <div className="px-[80px] py-[35px] bg-white flex flex-col gap-y-[48px] mb-[62px]">
        <div>
          <header className="flex justify-between items-center mb-4">
            <h1 className="text-red100 text-[30px] font-extrabold">
              Live Auctions
            </h1>
            <NavLink to="/nft/12">
              <h1 className="text-xl font-extrabold text-[#BCB9B9]">See All</h1>
            </NavLink>
          </header>
          <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-x-5">
            <img src={live1} alt="" />
            <img src={live2} alt="" />
            <img src={live3} alt="" />
            <img src={live4} alt="" />
          </div>
        </div>
        <div>
          <header className="flex justify-between items-center mb-4">
            <h1 className="text-[#3A3A3A] text-[30px] font-extrabold">
              Upcoming Auctions
            </h1>
            <h1 className="text-xl font-extrabold text-[#BCB9B9]">See All</h1>
          </header>
          <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-x-5">
            <img src={up1} alt="" />
            <img src={up2} alt="" />
            <img src={up3} alt="" />
            <img src={up4} alt="" />
          </div>
        </div>
        <div>
          <header className="flex justify-between items-center mb-4">
            <h1 className="text-[#3A3A3A] text-[30px] font-extrabold">
              Today&apos;s pick
            </h1>
            <h1 className="text-xl font-extrabold text-[#BCB9B9]">See All</h1>
          </header>
          <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-x-5">
            <img src={today1} alt="" />
            <img src={today2} alt="" />
            <img src={today3} alt="" />
            <img src={today4} alt="" />
          </div>
        </div>
        <div>
          <header className="flex justify-between items-center mb-4">
            <h1 className="text-[#3A3A3A] text-[30px] font-extrabold">
              New auctions
            </h1>
            <h1 className="text-xl font-extrabold text-[#BCB9B9]">See All</h1>
          </header>
          <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-x-5">
            <img src={new1} alt="" />
            <img src={new2} alt="" />
            <img src={new3} alt="" />
            <img src={new4} alt="" />
          </div>
        </div>
      </div>
      <TopAuctions />
    </div>
  );
}

export default Home;
