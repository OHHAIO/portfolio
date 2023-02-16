import { differenceInCalendarMonths } from "date-fns";

export interface IWorkInfo {
  title: string;
  description: Array<string>;
}

export interface ICareerInfo {
  companyName: string;
  companyInfo: string;
  startDate: Date;
  endDate: Date;
  employmentPeriod: number;
  workInfo: Array<IWorkInfo>;
}

class CareerInfo {
  companyName: string;
  companyInfo: string;
  startDate: Date;
  endDate: Date;
  employmentPeriod: number;
  workInfo: Array<IWorkInfo>;

  constructor(companyName: string, companyInfo: string, startDate: Date, endDate: Date, workInfo: Array<IWorkInfo>) {
    this.companyName = companyName;
    this.companyInfo = companyInfo;
    this.startDate = startDate;
    this.endDate = endDate;
    this.workInfo = workInfo;
    this.employmentPeriod = differenceInCalendarMonths(endDate, startDate);
  }
}

export default CareerInfo;
