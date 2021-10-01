import React from 'react';
import s from './ListHistory.module.css';

function ListHistory({list}) {
	const listOfSavedTime = list.map((item, i)=>(
		<li key={i}>{item}</li>
		))
	return ( 
		<ul className={s.list}>
			{listOfSavedTime}
		</ul>
	 );
}

export default ListHistory;