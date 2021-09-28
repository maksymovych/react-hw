import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '../../ui/button/Button';
import s from './Controls.module.css';


function Controls({buttons, setIsStart}) {
	const controlPanel = buttons.map(unit=> 
<Button key={uuidv4()} color={unit.color} onClick={unit.onClick}>{unit.body}</Button>
	);
	return ( 
		<div className={s.controls}>
			{controlPanel}
		</div>
	 );
}

export default Controls;