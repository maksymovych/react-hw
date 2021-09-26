import s from './UserList.module.css'
import User from './User/User';
import ShowModal from './ShowModal/ShowModal';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';


function ListOfUsers({user, isActive, setIsActive, openCard, userCard}) {
	
	return ( 
		<>
			<ShowModal userCard={userCard}  isActive={isActive} setIsActive={setIsActive}/>
			<div className={s.cards} >
				{user.map((item)=> <User openCard={openCard} key={uuidv4()} user={item}/>)}
			</div>
		</>
	 );
}

export default ListOfUsers;