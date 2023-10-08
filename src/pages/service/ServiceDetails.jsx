import { Link, useLoaderData } from "react-router-dom";
import { BsFillBookmarkFill, BsDiamondFill } from "react-icons/bs";
import { getServices } from "../../fetch";
import SingleServiceCard from "../../components/SingleServiceCard";
import Button from "../../components/Button";

const ServiceDetails = () => {
  const { name, img, description, price } = useLoaderData();
  const services = getServices();

  return (
    <div className=" container mx-auto px-5 2xl:px-0 my-20">
      <div className="grid grid-rows-1 md:grid-cols-3 xl:grid-cols-4 mt-6 gap-6">
        <div className="col-span-2 xl:col-span-3 flex flex-col gap-4 justify-start ">
          <img
            src={img}
            alt="img"
            className=" w-full h-[300px]  md:h-[400px] lg:h-[600px]"
          />
          <h1 className=" text-3xl font-bold text-[#21255d]">{name}</h1>
          <h2 className=" text-2xl font-semibold ">
            <span className=" text-[#21255d]"> Price : </span>
            <span className=" text-bg">{price}</span>
          </h2>
          <div className="w-36">
            <Button> Get Start </Button>
          </div>

          <h1 className="text-[#21255d] text-center flex justify-center items-center gap-1 flex-col text-2xl font-semibold">
            <span> All that will be in this service</span>
            <span className="block h-[2px] mt-3 w-36 bg-[#73268e]"></span>
          </h1>
          <div className=" text-[#21255d]">
            {description.map((item, i) => (
              <div className="" key={i}>
                <div className=" flex justify-start items-center gap-2">
                  <BsFillBookmarkFill />
                  <h1 className=" text-xl font-semibold">
                    {item.service_name}
                  </h1>
                </div>
                <h1 className=" text-lg pl-6">{item.description}</h1>
                <h1 className=" text-lg pl-6 flex justify-start flex-col ">
                  {item.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className=" flex justify-start items-center gap-2 text-sm">
                      <BsDiamondFill /> <span>{highlight}</span>
                    </div>
                  ))}
                </h1>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h1 className="text-[#21255d] text-center flex justify-center items-center gap-1 flex-col text-2xl font-semibold">
            <span> Others Services</span>
            <span className="block h-[2px] mt-3 w-36 bg-[#73268e]"></span>
          </h1>

          <div className=" mt-5">
            {services.slice(0, 4).map((item) => (
              <SingleServiceCard service={item} key={item.id} />
            ))}
          </div>
          <Link
            to="/services"
            className="flex justify-center items-center my-10">
            <Button> Show All</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
