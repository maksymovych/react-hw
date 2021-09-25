import React from 'react';
import s from './Modal.module.css';

function Modal({children, isActive, setIsActive}) {
	let classes = [s.modalWrapper];
	if (isActive) classes.push(s.active);

	function clickToClose(className){
		if(className.includes('modalWrapper') 
		|| className.includes('close')){
			setIsActive(false);
		}
		return;
	}

	return ( 
		<div className={classes.join(' ')} 
		onClick={(e)=>clickToClose(e.target.className)}>
			<div className={s.modalBody}>
				<span className={s.close}>&#10006;</span>
				{children}
				</div>
		</div>
	 );
}

export default Modal;