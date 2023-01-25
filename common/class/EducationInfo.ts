export interface IEducationInfo {
  educationName: string;
  academyName: string;
  startDate: Date;
  endDate: Date;
}

class EducationInfo {
  educationName: string;
  academyName: string;
  startDate: Date;
  endDate: Date;

  constructor(educationName: string, academyName: string, startDate: Date, endDate: Date) {
    this.educationName = educationName;
    this.academyName = academyName;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

export default EducationInfo;
