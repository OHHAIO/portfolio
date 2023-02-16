import { format } from "date-fns";

export const convertDateFormat = (date: Date): string => {
  return format(date, "yyyy.MM");
};

export const goToGithub = () => window.open("https://github.com/OHHAIO", "_blank");

export const goToUniversity = () => window.open("https://global.kwansei.ac.jp/", "_blank");
