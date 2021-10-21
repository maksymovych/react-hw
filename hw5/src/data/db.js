module.exports = () => {
  const cards = [
    {
      id: "",
      time: "01:23:10",
    },
    {
      id: "",
      time: "01:37:10",
    },
    {
      id: "",
      time: "03:22:10",
    },
    {
      id: "",
      time: "01:20:10",
    },
    {
      id: "",
      time: "02:27:10",
    },
    {
      id: "",
      time: "00:55:10",
    },
    {
      id: "",
      time: "01:20:10",
    },
    {
      id: "",
      time: "02:21:10",
    },
    {
      id: "",
      time: "02:22:10",
    },
  ];

  const registration = {
    title: "Registration user",
    inputs: [
      { label: "First Name", input: "Enter first name..." },
      { label: "Last Name", input: "Enter last name..." },
    ],
    button: "Register participant",
  };

  const winnerinfo = {
    title: "Total participants:",
    button: "Show winner",
  };
  return { cards, registration, winnerinfo };
};
