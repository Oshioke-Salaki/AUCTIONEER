import { useNavigate } from 'react-router-dom';
import Navbar from '../ui/Navbar';
function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen overflow-hidden landingpage flex flex-col">
      <Navbar />
      <h1 className="mb-[63px] text-[48px] font-extrabold text-center text-white mt-[200px]">
        Welcome to the future of auctions,
        <br />
        where heroes are made and legends are born
      </h1>
      <button
        className="px-[70px] py-[18px] bg-black border-[2px] border-solid border-white rounded-[10px] text-white text-[28px] font-semibold inline-block self-center w-fit"
        onClick={() => navigate('home')}
      >
        Get started
      </button>
    </div>
  );
}

export default LandingPage;
