const URL = 'https://api.climateclock.world/v2/clock.json';
import dayjs from 'dayjs';

export async function getDeadlineFromAPI(url) {
  try {
    let res = await fetch(url);
    let data = await res.json();
    const deadline = data.data.modules.carbon_deadline_1.timestamp;
    return deadline;
  } catch (e) {
    return `An error has occured: ${e.message}`;
  }
}

export function getRemainingTime(climateDeadline) {
  const deadline = dayjs(climateDeadline);
  const now = dayjs();

  if (deadline.isBefore(now)) {
    return {
      years: '00',
      months: '00',
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    };
  }

  return {
    years: '00',
    months: getMonths(deadline, now),
    days: getDays(deadline, now),
    hours: getHours(deadline, now),
    minutes: getMinutes(deadline, now),
    seconds: getSeconds(deadline, now),
  };
}

// console.log('willthiswork?', dayjs(1879430400000));

function getMonths(deadline, now) {
  const months = deadline.diff(now, 'months') % 12;
  return months;
}

function getDays(deadline, now) {
  const days = deadline.diff(now, 'days') % 365;
  return days;
}
function getHours(deadline, now) {
  const hours = deadline.diff(now, 'hours') % 24;
  return hours;
}

function getMinutes(deadline, now) {
  const minutes = deadline.diff(now, 'minutes') % 365;
  return minutes;
}

function getSeconds(deadline, now) {
  const seconds = deadline.diff(now, 'seconds') % 365;
  return seconds;
}

// const deadline = getDeadline(URL)
//       .then((data) => data.toString())
//       .then((deadlineString) =>
//         setClimateDeadline({
//           year: deadlineString.slice(0, 4),
//           month: deadlineString.slice(6, 7),
//           day: deadlineString.slice(8, 10),
//           hour: deadlineString.slice(11, 13),
//           minute: deadlineString.slice(14, 16),
//           second: deadlineString.slice(17, 19),
//         })
//       );
// console.log(getDays(1879430400000, Date.now()));

// const testDead = dayjs(1879430400000);
// const testNow = dayjs();
// console.log('please', getDays(testDead, testNow));
