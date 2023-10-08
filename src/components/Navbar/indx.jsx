import { images } from "../../constant";
import { NavLink, useLocation } from "react-router-dom";
import useDisplay from "../../hooks/useDisplay";
import { useLayoutEffect, useState } from "react";
import Button from "../Button";
import useAuthentication from "../../hooks/useAuthentication";

const menu = [
  { link: "/", label: "Home" },
  { link: "/services", label: "Services" },
  { link: "/about", label: "About Us" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [windowWidth, scrollY] = useDisplay();
  const { user, logoutUser, loading } = useAuthentication();

  const handleLogout = () => {
    logoutUser();
  };

  useLayoutEffect(() => {
    if (windowWidth > 600) {
      setIsOpen(true);
    }
  });

  const handleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  const { pathname } = useLocation();

  return (
    <div
      className={`${pathname === "/" && "fixed top-0 left-0 right-0"} w-full ${
        scrollY > 30 && pathname === "/" && "bg-2cb z-10"
      } ${pathname != "/" && "bg-2cb"}`}>
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
            <button className="md:hidden" onClick={handleNavbar}>
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
            <button className="md:hidden" onClick={handleNavbar}>
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
                "absolute top-24 left-0   flex-col w-full bg-[#20245c] p-3  justify-start items-center"
              } gap-5 flex z-10 items-center`}>
              {menu.map((item) => (
                <NavLink
                  onClick={windowWidth < 600 && handleNavbar}
                  key={item.link}
                  to={item.link}
                  className={({ isActive }) =>
                    `${isActive && "text-bg"} font-semibold text-xl`
                  }>
                  {item.label}
                </NavLink>
              ))}

              {user && !user.photoURL && !loading && (
                <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <span className="font-medium text-gray-600 dark:text-gray-300">
                    {user?.email?.slice(0, 2)}
                  </span>
                </div>
              )}
              {user?.photoURL && !loading && (
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  src={user.photoURL}
                  alt="photo"
                />
              )}
              {user?.displayName && !loading && <h1>{user.displayName}</h1>}
              {user && !loading && (
                <Button onClick={handleLogout}>Logout</Button>
              )}
              {!user && (
                <NavLink
                  onClick={windowWidth < 600 && handleNavbar}
                  to="/login"
                  className={({ isActive }) =>
                    `${isActive && "text-bg"} font-semibold text-xl`
                  }>
                  Login
                </NavLink>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
