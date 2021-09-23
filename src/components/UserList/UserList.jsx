import s from './UserList.module.css'
import User from './User/User';

function ListOfUsers(props) {
	let key = 0;
	return ( 
		<div className={s.cards}>
			{props.user.map(item=> <User user={item} key={key++}/>)}
		</div>
	 );
}

export default ListOfUsers;