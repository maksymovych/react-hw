import React, { useState } from 'react';
import Button from '../components/ui/Button/Button';
import Input from '../components/ui/Input/Input';
import s from './AddNewUser.module.css';

function AddNewUser(props) {

	const name = 'name';
	const age = 'age';
	const balance = 'balance';
	const gender = 'gender';
	const src = "https://image.freepik.com/free-vector/user-icon_126283-435.jpg";
	const [input, setInput] = useState({
		[name]: '',
		[age]: '',
		[balance]: '',
		[gender]: '',
		picture: src,
	})
	function changeInput(e){
		const inputName = e.target.name;
		let value = e.target.value;
		setInput({...input, [inputName]: value})
	}
	function clickButton(e){
		e.preventDefault();

		const salary = '$' + input[balance].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '.00';
		alert('New ')
		return props.addUser({...input, [balance]: salary});
	}

	return ( 
		<form className={s.addUserForm} action="submit">
			<Input value={input[name]} onChange={changeInput}type='text' name={name} placeholder={name} />
			<Input value={input.age} onChange={changeInput}type='number' name={age} placeholder={age}/>
			<Input value={input.gender} onChange={changeInput}type='text' name={gender} placeholder={gender} />
			<Input value={input.balance} onChange={changeInput}type='number' name={balance} placeholder={balance} />
			<Button type='submit' onClick={clickButton}>Add User</Button>
		</form>
	 );
}

export default AddNewUser;