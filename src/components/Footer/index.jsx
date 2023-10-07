import { Link } from "react-router-dom";
import { images } from "../../constant";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-cb">
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto px-5 2xl:px-0 py-10 text-white">
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex justify-start items-center">
            <img src={images.Logo} alt="logo" className="w-10 h-10" />
            <span className=" logo-text font-bold text-3xl text-white ">
              EVENT<span className="text-bg logo-text">BD</span>
            </span>
          </div>
          <p className=" mt-3 text-lg text-zinc-400">Dhaka Office:</p>
          <p className=" mt-3 text-lg text-zinc-400 text-center md:text-start">
            Level -7, Suite -2, A K Complex, 19 Green Road,Dhanmondi, Dhaka -
            1205, Bangladesh
          </p>
          <p className=" mt-3 text-lg text-zinc-400">Mobile: +880 180000000</p>
        </div>
        <div className=" flex flex-col  items-center gap-3 text-zinc-400">
          <h1 className=" font-semibold text-2xl text-white ">Quick Links</h1>
          <span className="block h-[2px] mt-3 w-36 bg-[#73268e]"></span>
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Gallery</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Service</Link>
        </div>
        <div className=" flex flex-col items-center  md:items-start gap-3 text-zinc-400">
          <h1 className=" font-semibold text-2xl text-white ">Our Services</h1>
          <span className="block h-[2px] mt-3 w-36 bg-[#73268e]"></span>
          <span>Weddings</span>
          <span>Birthday Parties</span>
          <span>Anniversaries Parties</span>
          <span>Engagement Parties</span>
          <span>Retirement Parties</span>
          <span>Baby shower</span>
        </div>
        <div className=" flex flex-col items-center lg:items-start gap-3 ">
          <h1 className=" font-semibold text-2xl text-white ">Newsletter</h1>
          <span className="block h-[2px] mt-3 w-36 bg-[#73268e]"></span>
          <div className="bg-[#71278d] cursor-pointer ">
            <input
              type="text"
              placeholder="Your Email Address"
              className=" p-3 outline-none w-[70%]"
            />
            <button className="text-center font-semibold text-white text-lg p-2 bg-[#71278d]">
              SEND
            </button>
          </div>
          <h1 className="font-semibold text-xl text-white">Social Links</h1>
          <div className="flex justify-start gap-4 items-center">
            <a
              href="#"
              className=" border-2 rounded-full p-2 border-violet-600">
              <FaFacebookF />
            </a>
            <a
              href="#"
              className=" border-2 rounded-full p-2 border-violet-600">
              <BiLogoLinkedin />
            </a>
            <a
              href="#"
              className=" border-2 rounded-full p-2 border-violet-600">
              <BsTwitter />
            </a>
            <a
              href="#"
              className=" border-2 rounded-full p-2 border-violet-600">
              <AiFillInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
