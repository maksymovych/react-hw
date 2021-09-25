import React from 'react';

function Select({changeInput, options, value, defaultValue, name}) {
	let key = 100;
	return ( 
		<select name={name} value={value}
		onChange={e => changeInput(e)}
		>
			<option value='' disablet={1} >{defaultValue}</option>
			{ 
				options.map(option => 
					<option key={key++} value={option.value}>{option.title}</option>)
			}
		</select>
	 );
}

export default Select;