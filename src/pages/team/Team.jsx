import team from "../../data/team.json";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Team = () => {
  return (
    <div className=" container mx-auto px-5 2xl:px-0 mb-28">
      <div className=" w-full flex flex-col gap-2 items-center justify-center my-10">
        <h1 className=" text-bg text-4xl xl:text-6xl font-bold text-center logo-text ">
          Our Team
        </h1>
        <span className="block h-[2px] mt-3 w-44 bg-[#73268e]"></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-8">
        {team.map((item, index) => (
          <div
            className=" relative  w-full h-[300px] lg:h-[400px] xl:h-[500px] overflow-hidden group"
            key={index}>
            <img src={item.img} alt="" className=" h-full w-full" />
            <div className=" absolute bottom-0 left-0 right-0 flex justify-center items-center z-10 ">
              <div className=" text-2xl font-bold py-2 bg-btn px-5 rounded-t-md text-zinc-200">
                {item.name}
              </div>
            </div>
            <div className=" absolute top-0 left-0 w-full h-full bg-slider"></div>

            {/* social icons  */}
            <div className=" absolute group-hover:bottom-1/2 -bottom-1/2 duration-300 transition-all left-0 right-0 z-10">
              <div className="flex justify-center text-white gap-4 items-center">
                <a
                  href="#"
                  className=" border-2 rounded-full p-2 bg-btn border-violet-600">
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className=" border-2 rounded-full p-2 bg-btn border-violet-600">
                  <BiLogoLinkedin />
                </a>
                <a
                  href="#"
                  className=" border-2 rounded-full p-2 bg-btn border-violet-600">
                  <BsTwitter />
                </a>
                <a
                  href="#"
                  className=" border-2 rounded-full p-2 bg-btn border-violet-600">
                  <AiFillInstagram />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
