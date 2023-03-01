export const drawStar = (score:number, fill:JSX.Element, emtpy:JSX.Element) => {
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