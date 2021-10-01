import React from 'react';
import s from './Button.module.css';

function Button({color, children, onClick, id}) {
	const styleColor = {backgroundColor: color}
	return ( 
		<button style={styleColor} 
		onClick={(e)=>onClick(e.target.id)} 
		className={s.buttonDefault} 
		id={id}
		>{children} </button>
	 );
}

export default Button;