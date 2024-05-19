import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import customParseFormat from 'dayjs/plugin/customParseFormat';

export const formateStartEndDate = (
  startDate: string,
  endDate: string | null
) => {
  const start = dayjs(startDate).format('MMM YYYY');
  let end;

  if (endDate) {
    end = dayjs(endDate).format('MMM YYYY');
  } else {
    end = 'Present';
  }

  return `${start} - ${end}`;
};

dayjs.extend(duration);
dayjs.extend(customParseFormat);

export const calculateDuration = (startDate: string, endDate: string) => {
  const start = dayjs(startDate);
  const end = dayjs(endDate);

  const years = end.diff(start, 'year');
  const months = end.diff(start, 'month') % 12;
  const days = end.diff(start.add(years, 'year').add(months, 'month'), 'day');

  return {
    years: years,
    months: months,
    days: days
  };
};
