export interface IHotel {
  name: string;
  type: string;
  city: string;
  address: string;
  distance: string;
  photos: [string];
  title: string;
  description: string;
  rating: number;
  rooms: [string];
  cheapestPrice: number;
  featured: boolean;
}
