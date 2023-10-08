import { Link } from "react-router-dom";
import AllServices from "../../components/AllServices";
import Button from "../../components/Button";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      {/* <Services /> */}
      <div className="py-16 container mx-auto px-5 2xl:px-0">
        <AllServices show={8} label="Our Services" />

        <Link to="/services" className="flex justify-center items-center my-10">
          <Button> Show All</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
