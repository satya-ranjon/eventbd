import Button from "../../components/Button";
import { getUpcomingEvent } from "../../fetch";

const UpcomingEvents = () => {
  const events = getUpcomingEvent();
  return (
    <div className="text-[#4b297b] container mx-auto px-5 2xl:px-0">
      <h1 className=" text-bg logo-text text-center text-4xl lg:text-5xl xl:text-6xl font-bold pt-20 ">
        Upcoming Events and Activities
      </h1>
      <div className="">
        {events.map((event, index) => (
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className={` grid gap-2 md:gap-12 my-14 ${
              index % 2 === 0 ? "custom1" : "custom2"
            }`}
            key={event.id}>
            <div
              style={{ gridArea: "box1" }}
              className={` w-full h-full hidden lg:block`}>
              <div className=" w-full h-full flex flex-col gap-2 justify-center items-center">
                <span className="font-bold text-4xl text-bg">
                  {event.date.slice(0, 2)}
                </span>
                <h1 className=" text-2xl font-semibold">
                  {event.date.slice(2, event.date.length)}
                </h1>
              </div>
            </div>
            <div style={{ gridArea: "box2" }} className="">
              <img src={event.img} alt="" className=" h-[200px] w-full" />
            </div>
            <div style={{ gridArea: "box3" }} className="">
              <div
                className={` flex  gap-1 items-start  ${
                  index % 2 === 0
                    ? "justify-start"
                    : "justify-start md:justify-end"
                }`}>
                <div
                  className={`${
                    index % 2 === 0 ? "text-start" : "text-start md:text-end"
                  }`}>
                  <h1 className=" text-3xl font-bold">{event.name}</h1>
                  <h1>Location : {event.location}</h1>
                  <h1>Time : {event.time}</h1>
                  <h1>Date : {event.date}</h1>
                  <h1>Category : {event.category}</h1>
                </div>
              </div>
            </div>
            <div style={{ gridArea: "box4" }} className="">
              <div
                className={` flex  items-center w-full h-full ${
                  index % 2 === 0
                    ? "justify-start md:justify-end"
                    : "justify-start"
                } `}>
                <Button>LEARN MORE</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
