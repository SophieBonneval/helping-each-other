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

export function getNextSecondDayOfMonth(dayOfWeek, numberOfDays) {
  const daysOfWeek = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
    Sunday: 0,
  };
  const dates = [];
  const today = new Date();
  dayOfWeek = daysOfWeek[dayOfWeek];

  for (let i = 0; dates.length < numberOfDays; i++) {
    let thisMonth = new Date(today.getFullYear(), today.getMonth() + i, 1);

    while (thisMonth.getDay() !== 1) {
      thisMonth.setDate(thisMonth.getDate() + 1);
    }
    thisMonth.setDate(thisMonth.getDate() + 7);

    if (today < thisMonth) {
      dates.push(new Date(thisMonth));
    }
  }

  return dates;
}
