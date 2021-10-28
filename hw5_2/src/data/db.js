module.exports = () => {
  const cards = [
    { id: "", time: "01:23:10" },
    { id: "", time: "01:37:10" },
    { id: "", time: "03:22:10" },
    { id: "", time: "01:20:10" },
    { id: "", time: "02:27:10" },
    { id: "", time: "00:55:10" },
    { id: "", time: "01:20:10" },
    { id: "", time: "02:21:10" },
    { id: "", time: "02:22:10" },
  ];

  const competitions = [
    {
      competitionId: "7d075882",
      name: "IRONMAN",
      status: "active",
      winner: "",
    },
    {
      competitionId: "9391866e",
      name: "Running 42.200 km",
      status: "finished",
      winner: "",
    },
    {
      competitionId: "ad3df9d2",
      name: "Swimming",
      status: "active",
      winner: "",
    },
    { competitionId: "53fd33f2", name: "Jogin", status: "active", winner: "" },
  ];
  return { cards, competitions };
};
