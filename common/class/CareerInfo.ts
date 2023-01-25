import { differenceInCalendarMonths } from "date-fns";

export interface ICareerInfo {
  name: string;
  startDate: Date;
  endDate: Date;
  employmentPeriod: number;
}

class CareerInfo {
  name: string;
  startDate: Date;
  endDate: Date;
  employmentPeriod: number;

  constructor(name: string, startDate: Date, endDate: Date) {
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.employmentPeriod = differenceInCalendarMonths(endDate, startDate);
  }
}

export default CareerInfo;
