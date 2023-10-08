import PropTypes from "prop-types";
import { getServices } from "../fetch";
import useDisplay from "../hooks/useDisplay";
import SingleServiceCard from "./SingleServiceCard";

const AllServices = ({ show, label }) => {
  const services = getServices();
  const [windowWidth] = useDisplay();

  const showServices = show ? (windowWidth > 1450 ? show : 6) : services.length;
  return (
    <div>
      <h1 className="text-center text-4xl xl:text-5xl 2xl:text-6xl font-bold text-[#21255d]">
        {label && (
          <div className="flex flex-col gap-2 justify-center items-center">
            <span> {label}</span>
            <span className="block h-[2px] mt-3 w-36 bg-[#73268e]"></span>
          </div>
        )}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 mt-20 ">
        {services.slice(0, showServices).map((item, i) => (
          <SingleServiceCard service={item} key={i} />
        ))}
      </div>
    </div>
  );
};

AllServices.propTypes = {
  show: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  label: PropTypes.string,
};
export default AllServices;
