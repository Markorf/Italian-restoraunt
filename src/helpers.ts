export const getFormatedDate = () => {
  const d = new Date();
  return `${d.getDate()}/${d.getMonth() +
    1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
};

export const getRandomPrice = (min: number, max: number) =>
  Math.random() * (max + 1 - min) + min;
