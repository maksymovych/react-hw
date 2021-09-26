import React from 'react';
import s from './User.module.css';

function User(props) {

	return ( 
		<div className={s.card} onClick={()=>props.openCard(props.user)}>
			<div className={s.imgUser}>
				<img className={s.img} src={props.user.picture} alt={props.user.name} />
			</div>
			<div className={s.cardInfo}>
				<h3>{props.user.name}</h3>
				<p>Age: {props.user.age}</p>
				<p>{props.user.gender}</p>
				<p>Salary: {props.user.balance}</p>
			</div>
		</div>
	 );
}

export default User;