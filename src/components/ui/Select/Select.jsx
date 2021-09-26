import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function Select({changeInput, options, value, defaultValue, name}) {
	return ( 
		<select name={name} value={value}
		onChange={e => changeInput(e)}
		>
			<option value='' disablet={1} >{defaultValue}</option>
			{ 
				options.map(option => 
					<option key={uuidv4()} value={option.value}>{option.title}</option>)
			}
		</select>
	 );
}

export default Select;