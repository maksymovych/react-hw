import React from 'react';

function Select({changeInput, options, value, defaultValue, name}) {
	return ( 
		<select name={name} value={value}
		onChange={e => changeInput(e)}
		>
			<option value='' disablet >{defaultValue}</option>
			{ 
				options.map(option => 
					<option key={option.value} value={option.value}>{option.title}</option>)
			}
		</select>
	 );
}

export default Select;