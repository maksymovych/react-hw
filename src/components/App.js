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
  const [isActive, setIsActive] = useState(false);
  const [isByName, setIsByName] = useState(false);
  const [userCard, setUserCard] = useState({});

  const filterByName = useMemo(() => {
    setIsByName(true);
    return users.filter((user) => {
      const searchValue = filter.trim().toLowerCase();
      const usersName = user.name.toLowerCase();
      return usersName.includes(searchValue);
    });
  }, [filter, users]);

  const sortByAge = useMemo(() => {
    setIsByName(false);
    if (!sort) return users;
    const filteredArray = [...users];
    return filteredArray.sort((a, b) =>
      sort === "des" ? b.age - a.age : a.age - b.age
    );
  }, [sort, users]);

  const shownUsers = isByName ? filterByName : sortByAge;

  function addUser(newUser) {
    return setUsers([...users, newUser]);
  }

  function openCard(shownUser){
    setIsActive(true);
    setUserCard(shownUser);
    return;
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
      <UserList openCard={openCard} userCard={userCard} 
      user={shownUsers} isActive={isActive} setIsActive={setIsActive}/>
    </div>
  );
}

export default App;