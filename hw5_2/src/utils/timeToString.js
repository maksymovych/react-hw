export const timeToString = (timer) => {
  const hour = ("0" + Math.floor((timer / 3600) % 100)).slice(-2);
  const minutes = ("0" + Math.floor((timer / 60) % 60)).slice(-2);
  const seconds = ("0" + Math.floor(timer % 60)).slice(-2);
  return `${hour}:${minutes}:${seconds}`;
};
