import React from 'react';
import s from './Button.module.css';

function Button({color, children, onClick}) {
	const styleColor = {backgroundColor: color}
	return ( 
		<button style={styleColor} onClick={onClick} className={s.buttonDefault}>{children}</button>
	 );
}

export default Button;