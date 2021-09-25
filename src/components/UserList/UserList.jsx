import s from './UserList.module.css'
import User from './User/User';
import ShowModal from './ShowModal/ShowModal';

function ListOfUsers({user, isActive, setIsActive, openCard, userCard}) {
	let key = 0;

	return ( 
		<>
			<ShowModal userCard={userCard}  isActive={isActive} setIsActive={setIsActive}/>
			<div className={s.cards} >
				{user.map(item=> <User openCard={openCard} key={key++} user={item}/>)}
			</div>
		</>
	 );
}

export default ListOfUsers;