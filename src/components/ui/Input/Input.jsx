import React from 'react';
import s from './Input.module.css';
function Input({...props}) {
	return ( 
		<input className={s.input} {...props}/>
	 );
}

export default Input;