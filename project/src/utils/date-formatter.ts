import { MonthNames } from './constants';

const formatDate = (stringDate: string) => {
  const date = new Date(stringDate);

  const month = MonthNames[date.getMonth()];
  const day = date.getDay() + 1;
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};

export default formatDate;
