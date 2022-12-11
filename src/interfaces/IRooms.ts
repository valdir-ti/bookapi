interface IUnavailableDates {
  type: [Date];
}

interface IRoomNumber {
  number: number;
  unavailableDates: IUnavailableDates;
}

export interface IRooms {
  title: string;
  price: number;
  maxPeople: number;
  desc: string;
  roomNumbers: [IRoomNumber];
}
