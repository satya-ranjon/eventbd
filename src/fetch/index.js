import services from "../data/services.json";
import upcomming from "../data/upcommingevent.json";

export const getServices = () => {
  return services;
};

export const getService = (id) => {
  return services.find((item) => item.id === id);
};
export const getUpcomingEvent = () => {
  return upcomming;
};
