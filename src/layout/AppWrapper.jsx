import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/indx";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const AppWrapper = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default AppWrapper;
