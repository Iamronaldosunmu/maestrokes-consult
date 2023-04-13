import NavLink from "./NavLink";

const NavBar = () => {
  return (
    <div className="top-0 fixed left-0 right-0 z-20">
      <nav className="text-[#252525] text-opacity-[0.92] max-w-[1440px] px-[20px]  mx-auto pt-[26px] flex items-center justify-between">
        <p className=" text-[22px] xl:text-[28px]">
          <span className="font-bold">MAESTROKES</span> CONSULT
        </p>
        <div className="gap-[40px] hidden lg:flex">
          <NavLink text="ABOUT US" link="/about" />
          <NavLink text="OUR WORK" link="/our-work" />
          <NavLink text="CLIENTS" link="/cLIENTS" />
          <NavLink text="CONTACT US" link="/contact-us" />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
