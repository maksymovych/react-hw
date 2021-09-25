import React, { useMemo, useState } from "react";
import { userData as userArray } from "../userData";
import UserList from "./UserList/UserList";
import "./App.css";
import AddNewUser from "./AddNewUser/AddNewUser";
import Header from "./header/Header";

function App() {
  const [users, setUsers] = useState(userArray);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const filterByName = useMemo(() => {
    return users.filter((user) => {
      const searchValue = filter.trim().toLowerCase();
      const usersName = user.name.toLowerCase();
      return usersName.includes(searchValue);
    });
  }, [filter, users]);

  const sortByAge = function () {
    if (!sort) return filterByName;
    const filteredArray = [...filterByName];
    return filteredArray.sort((a, b) =>
      sort === "des" ? b.age - a.age : a.age - b.age
    );
  };

  const shownUsers = sortByAge();

  function addUser(newUser) {
    return setUsers([...users, newUser]);
  }

  return (
    <div className="app">
      <Header
        setFilter={setFilter}
        filter={filter}
        setSort={setSort}
        sort={sort}
      />
      <AddNewUser addUser={addUser} />
      <UserList user={shownUsers} />
    </div>
  );
}

export default App;
