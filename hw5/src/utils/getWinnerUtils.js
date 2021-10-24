export const getWinnerUtils = (cards) => {
  const sortedArr = getSortedArr(cards);
  const winner = sortedArr[0];
  return winner;
};
function getSortedArr(cards) {
  return cards.sort(
    (a, b) =>
      Number(a.time.replaceAll(":", "")) - Number(b.time.replaceAll(":", ""))
  );
}
