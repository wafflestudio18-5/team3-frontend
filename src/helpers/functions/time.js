// response의 time을 넣으면 에타 타임 포맷에 맞춰 return 해준다.

const timePassed = (time) => {
  const currDate = new Date();
  const createdDate = new Date(time);
  if (Math.floor((currDate - createdDate) / 3600)) {
    const [year, month, date, hour, minute] = time.split(/[-:T:.]/);
    return (
      `${Number(year) !== currDate.getFullYear() ? (year % 100) + '/' : ''}${month}/${date}` +
      ` ${hour}:${minute}`
    );
  } else {
    const minute = (currDate - createdDate) / 60;
    return Math.floor(minute) ? Math.floor(minute) + '분 전' : '방금';
  }
};
