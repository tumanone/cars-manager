import {Car} from "./car.interface";

export interface Owner {
  id: number,
  last_name: string;
  first_name: string;
  middle_name: string;
  cars: Car[]
}
