import React from 'react';
import Select from '../../ui/Select/Select';
import s from './FilterByAge.module.css'

function FilterByAge({sort, setSort}) {

	const options = [
		{value: 'asc', title: 'Ascending'},
		{value: 'des', title: 'Descending'},
	]

	return ( 
		<div className={s.select}>
			<Select defaultValue='Choose filter' changeInput={(e)=> setSort(e.target.value)} options={options} value={sort}/>
		</div>
	 );
}

export default FilterByAge;