import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/indx";
import Footer from "../components/Footer";

const AppWrapper = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppWrapper;
