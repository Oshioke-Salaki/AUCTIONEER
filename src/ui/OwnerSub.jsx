import avatar from '../assets/av.png';
function OwnerSub() {
  return (
    <div className="flex items-center gap-x-3 text-white">
      <img src={avatar} alt="" className="w-[60px] h-[60px]" />
      <div className="flex flex-col">
        <h1 className="text-[22px] font-semibold text-[#3A3A3A]">TheRave</h1>
        <h1 className="text-[18px] font-semibold text-ash400">
          @oshiokesalaki
        </h1>
      </div>
    </div>
  );
}

export default OwnerSub;
