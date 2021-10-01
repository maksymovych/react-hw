import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '../../ui/button/Button';
import './Controls.css';


function Controls({buttons, onClick}) {
	const controlPanel = buttons.map(unit=> 
<Button key={uuidv4()} id={unit.body} color={unit.color} onClick={onClick}>{unit.body}</Button>
	);
	return ( 
		<div className='controls'>
			{controlPanel}
		</div>
	 );
}

export default Controls;