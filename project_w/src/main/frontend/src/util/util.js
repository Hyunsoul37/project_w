export const delay = (time, value) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(value);
    }, time);
  });
