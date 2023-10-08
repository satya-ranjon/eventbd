import PropTypes from "prop-types";

const Button = ({ children }) => {
  return (
    <button className=" p-2 bg-btn text-sm font-semibold rounded-sm px-4">
      <span className=" text-white"> {children} </span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Button;
