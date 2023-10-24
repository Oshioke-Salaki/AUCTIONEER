import avatar from '../assets/av.png';

function OwnerMain() {
  return (
    <div className="flex items-center gap-x-6 text-white">
      <img src={avatar} alt="" />
      <div className="flex flex-col">
        <h1 className="text-2xl font-extrabold">TheRave</h1>
        <h1 className="text-base font-semibold">@oshiokesalaki</h1>
      </div>
    </div>
  );
}

export default OwnerMain;
