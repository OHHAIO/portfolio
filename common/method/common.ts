import { format } from "date-fns";

export const convertDateFormat = (date: Date): string => {
  return format(date, "yyyy.MM");
};
