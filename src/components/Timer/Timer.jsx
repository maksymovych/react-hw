import React from 'react';
import s from './Timer.module.css';

function Timer({currentTime}) {
	return ( 
		<div className={s.timer}>
			<span>{currentTime}</span>
		</div>
	 );
}

export default Timer;