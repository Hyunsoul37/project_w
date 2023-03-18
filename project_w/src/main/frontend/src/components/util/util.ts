export const drawStar = (
  score: number,
  fill: JSX.Element,
  emtpy: JSX.Element
) => {
  let i = 0;
  let star = [];
  let num = Math.round(score);
  for (i = 0; i < num; i++) {
    star.push(fill);
  }
  for (i = 0; i < 5 - num; i++) {
    star.push(emtpy);
  }
  return star;
};

export const getDate = () => {
  let year = new Date().getFullYear();
  let month: string | number = new Date().getMonth() + 1;
  let day: string | number = new Date().getDate();

  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }

  return `${year}.${month}.${day}`;
};

export const GetReviewid = () => {
  let id = Math.random() * 1000000;
  return id;
};
