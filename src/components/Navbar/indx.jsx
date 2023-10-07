import { images } from "../../constant";
import { NavLink } from "react-router-dom";
import useDisplay from "../../hooks/useDisplay";
import { useLayoutEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, scrollY] = useDisplay();

  useLayoutEffect(() => {
    if (windowWidth > 600) {
      setIsOpen(true);
    }
  });

  return (
    <div
      className={`fixed top-0 left-0 right-0 w-full ${
        scrollY > 30 && "bg-2cb z-10"
      }`}>
      <div className="px-5 xl:px-0 ">
        <div className="flex justify-between items-center container mx-auto py-10 text-white">
          {/* // Logo */}
          <div className="">
            <div className="flex justify-start items-center">
              <img src={images.Logo} alt="logo" className="w-10 h-10" />
              <span className=" logo-text font-bold text-3xl ">
                EVENT<span className="text-bg logo-text">BD</span>
              </span>
            </div>
          </div>

          {isOpen ? (
            <button className="md:hidden" onClick={() => setIsOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="text-[#f323fe] font-bold h-8 w-8 ">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          ) : (
            <button className="md:hidden" onClick={() => setIsOpen(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="text-[#f323fe] font-bold h-8 w-8 ">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                />
              </svg>
            </button>
          )}

          {isOpen && (
            <div
              className={`${
                windowWidth < 600 &&
                "absolute top-24 left-0   flex-col w-full bg-[#20245c] p-3  justify-start items-center "
              } gap-5 flex`}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive && " text-bg"} font-semibold text-xl`
                }>
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${isActive && " text-bg"} font-semibold text-xl`
                }>
                About Us
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `${isActive && " text-bg"} font-semibold text-xl`
                }>
                Login
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
