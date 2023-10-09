import images from "../../constant/images";
import { LuMessagesSquare } from "react-icons/lu";
import { RiPhoneFindLine } from "react-icons/ri";
import { MdDisplaySettings } from "react-icons/md";

const WorkPlan = () => {
  return (
    <div className=" container mx-auto px-5 2xl:px-0 mt-10 mb-20">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-24 ">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          className="border-[20px] border-[#a100ff21] relative">
          <img
            src={images.plan}
            alt=""
            className=" w-full h-[300px] md:h-[500px] xl:h-[600px]"
          />
          {/* <div className=" absolute -bottom-20 -right-20 h-60 w-60 border-[20px] border-[#a100ff5c]">
            <img src={images.plan1} className=" h-full w-full" alt="" />
          </div> */}
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          className="text-[#4b297b] mt-5 ">
          <div className="flex flex-col gap-2 items-center justify-center">
            <h1 className="text-bg text-center logo-text text-4xl lg:text-6xl font-semibold  ">
              How it Work
            </h1>
            <span className="block h-[2px] mt-3 w-56 bg-[#73268e]"></span>
          </div>
          <h1 className=" font-bold text-4xl my-4">
            Makes it Easy to Create Your Event.
          </h1>
          <h4>
            Our platform is designed with you in mind, offering a seamless and
            user-friendly experience that makes creating your event a breeze.
            Whether you're organizing a corporate conference, a birthday bash, a
            charity fundraiser, or any other special occasion, we've got you
            covered.
          </h4>
          <div className="flex justify-start items-start gap-3 mt-4">
            <div>
              <LuMessagesSquare className=" text-6xl text-[#c439e7]" />
            </div>
            <div>
              <h1 className=" text-3xl font-bold ">Consultation</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
          <div className="flex justify-start items-start gap-3 mt-4">
            <div>
              <RiPhoneFindLine className=" text-6xl text-[#c439e7]" />
            </div>
            <div>
              <h1 className=" text-3xl font-bold ">Planning</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
          <div className="flex justify-start items-start gap-3 mt-4">
            <div>
              <MdDisplaySettings className=" text-6xl text-[#c439e7]" />
            </div>
            <div>
              <h1 className=" text-3xl font-bold ">Execution</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPlan;
