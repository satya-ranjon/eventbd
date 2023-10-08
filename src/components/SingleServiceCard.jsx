import PropTypes from "prop-types";

import { Link, useLocation } from "react-router-dom";

const SingleServiceCard = ({ service }) => {
  const { id, name, price, description, img } = service || {};
  const { pathname } = useLocation();

  return (
    <div className=" rounded-xl overflow-hidden" key={id}>
      <div className="relative">
        <img
          src={img}
          alt={name}
          className={`${
            pathname.includes("/service/")
              ? "h-[230px] md:h-[200px] lg:h-[250px]"
              : "h-[300px]"
          } w-full`}
        />
        <div className=" absolute bg-slider top-0 left-0 right-0 bottom-0"></div>
        <div className=" absolute bottom-8 rounded-md left-8 p-2  font-semibold text-sm bg-[#4b297b]">
          <span className="">
            <span className=" text-zinc-300">Price : </span>
            <span className="text-[#d723fe]">{price}</span>
          </span>
        </div>
      </div>
      <div className="mt-5 text-[#21255d]">
        <h1 className=" text-xl font-semibold text-[#21255d]">{name}</h1>
        <p className=" text-sm">
          {description[0].description.slice(0, 120)}....
        </p>
        <p>
          {description[0].highlights.slice(0, 4).map((item, index) => (
            <li
              key={index}
              className=" list-none flex justify-start gap-4 text-sm">
              <svg
                className="w-4"
                viewBox="0 0 32 32"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M27 6v22c0 1.65-1.35 3-3 3H8c-1.65 0-3-1.35-3-3V6c0-1.65 1.35-3 3-3h16c1.65 0 3 1.35 3 3z"
                  fill="#4f1f82"
                  className="fill-ffc10a"></path>
                <path
                  d="M21 3v2c0 1.1-.9 2-2 2h-6c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2z"
                  fill="#5a1e96"
                  className="fill-fe9803"></path>
              </svg>

              {item}
            </li>
          ))}
        </p>
      </div>

      <Link
        to={`/service/${id}`}
        className=" font-semibold text-lg my-3 flex justify-start gap-3 items-center ">
        <span className="text-bg">Read More .....</span>
      </Link>
    </div>
  );
};

SingleServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    description: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string.isRequired,
        highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
    ).isRequired,
    img: PropTypes.string.isRequired,
  }),
};

export default SingleServiceCard;
