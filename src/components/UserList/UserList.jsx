import s from './UserList.module.scss'
import User from './User/User';
import ShowModal from './ShowModal/ShowModal';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';


function ListOfUsers({user, isActive, setIsActive, openCard, userCard}) {
	const isShow =user.length ? s.noMatches : '';
	
	return ( 
		<>
			<ShowModal userCard={userCard}  isActive={isActive} setIsActive={setIsActive}/>
			<div className={s.cards} >
				{user.map((item)=> <User openCard={openCard} key={uuidv4()} user={item}/>)}
			</div>
			<h2 className={isShow}>Ooops... No matches found, try other opions!</h2>
		</>
	 );
}

export default ListOfUsers;