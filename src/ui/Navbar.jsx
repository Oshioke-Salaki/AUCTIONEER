import Logo from './Logo';
import NavLinks from './NavLinks';

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-[#0C0217] pt-[19px] pb-[14px] pl-[33px] pr-[80px]">
      <Logo />
      <NavLinks />
      <button className="py-[11px] px-[34px] rounded-sm border-white border-solid border-[2px] bg-[#3A3A3A] text-white text-base font-extrabold">
        Account
      </button>
    </nav>
  );
}

export default Navbar;
