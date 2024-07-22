export function getNextWeekDays(dayOfWeek, numberOfDays) {
  const daysOfWeek = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
    Sunday: 0,
  };
  const days = [];
  let currentDate = new Date();
  dayOfWeek = daysOfWeek[dayOfWeek];

  if (currentDate.getDay === dayOfWeek) {
    days.push(new Date(currentDate));
  }

  while (days.length < numberOfDays) {
    currentDate.setDate(currentDate.getDate() + 1);

    if (currentDate.getDay() === dayOfWeek) {
      days.push(new Date(currentDate));
    }
  }

  return days;
}
