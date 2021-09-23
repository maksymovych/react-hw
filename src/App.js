import React, { useState } from 'react';
import { userData as userArray } from './userData';
import UserList from './components/UserList/UserList';
import FilterByName from './components/header/FilterByName/FilterByName';
import './App.css';
import AddNewUser from './AddNewUser/AddNewUser';

function App() {
  
  const [user, setUser] = useState(userArray)

  function addUser(newUser){
    return setUser([...user, newUser])
  }

  return (
    <div className='app'>
      <FilterByName setUser={setUser} userArray={userArray}/>
      <AddNewUser addUser={addUser}/>
      <UserList user={user}/>
    </div>
  );
}

export default App;
