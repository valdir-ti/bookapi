import { IHotel } from "../interfaces/IHotel";

export const hotelValidate = (Hotel: IHotel): any => {
  if (!Hotel) return "No data provided";
  if (!Hotel.name) return "No hotel name provided";
  if (!Hotel.type) return "No hotel type provided";
  if (!Hotel.city) return "No hotel city provided";
  if (!Hotel.address) return "No hotel address provided";
  if (!Hotel.distance) return "No hotel distance provided";
  if (!Hotel.title) return "No hotel title provided";
  if (!Hotel.description) return "No hotel description provided";
  if (!Hotel.cheapestPrice) return "No hotel cheapestPrice provided";
  return null;
};
