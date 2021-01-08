// response의 time을 넣으면 에타 타임 포맷에 맞춰 return 해준다.

const padzero = (n) => {
  return n >= 10 ? '' + n : '0' + n;
};

const timePassed = (time) => {
  const currDate = new Date();
  const createdDate = new Date(time);
  if (Math.floor((currDate - createdDate) / (3600 * 1000))) {
    const year = createdDate.getFullYear();
    const month = createdDate.getMonth() + 1;
    const date = createdDate.getDate();
    const hour = createdDate.getHours();
    const minute = createdDate.getMinutes();
    return `${Number(year) !== currDate.getFullYear() ? padzero(year % 100) + '/' : ''}${padzero(
      month,
    )}/${padzero(date)} ${padzero(hour)}:${padzero(minute)}`;
  } else {
    console.log(currDate - createdDate);
    const minute = (currDate - createdDate) / (60 * 1000);
    return Math.floor(minute) ? Math.floor(minute) + '분 전' : '방금';
  }
};

export default timePassed;
