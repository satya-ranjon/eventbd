import PropTypes from "prop-types";

const Button = ({ children }) => {
  return (
    <button className=" p-2 bg-[#15214f] text-sm font-semibold rounded-sm px-4">
      <span className=" text-bg"> {children} </span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Button;
