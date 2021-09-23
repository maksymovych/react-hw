import React, { useState } from 'react';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import s from './FilterByName.module.css';

function FilterByName(props) {

	const iconSearch = 'http://cdn.onlinewebfonts.com/svg/img_456268.png'
	const [inputValue, setInputValue] = useState('');

	function filterUsers(e){
		e.preventDefault();
		const newListUsers = props.userArray.filter(user => {
			const searchValue = inputValue.trim().toLowerCase();
			const users = 	user.name.toLowerCase();
			return users.includes(searchValue);
		});
		props.setUser(newListUsers);
	}

	return ( 
		<header className={s.header}>
			<h2>Filter by name</h2>
			<form className={s.searchWrapper}>
				<Input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
				<Button type='submit' onClick={filterUsers}>
				<img className={s.iconImg} src={iconSearch} alt="search" />
				</Button>
			</form>
		</header>
	 );
}

export default FilterByName;