import React from 'react';
import s from './Button.module.css'

function Button({children, ...props}) {
	return ( 
		<button className={s.buttonSearch} {...props}>{children}</button>
	 );
}

export default Button;