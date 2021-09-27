import React, { useState } from 'react';
import Button from '../ui/Button/Button';
import Input from '../ui/Input/Input';
import Select from '../ui/Select/Select';
import s from './AddNewUser.module.css';

function AddNewUser(props) {

	const name = 'name';
	const age = 'age';
	const balance = 'balance';
	const gender = 'gender';
	const pref = 'Enter ';
	const src = "https://image.freepik.com/free-vector/user-icon_126283-435.jpg";

	const [input, setInput] = useState({
		[name]: '',
		[age]: '',
		[balance]: '',
		[gender]: '',
		picture: src,
	});

	const options = [
		{value: 'male', title: 'Male'},
		{value: 'female', title: 'Female'}];

	function changeInput(e){
		const inputName = e.target.name;
		let value = e.target.value;
		setInput({...input, [inputName]: value})
	}
	
	function clickButton(e){
		e.preventDefault();

		const salary = '$' + input[balance].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '.00';
		alert('New user was added')
		return props.addUser({...input, [balance]: salary});
	}

	return ( 
		<form className={s.addUserForm} action="submit">
			<Select name={gender} value={input.gender} changeInput={changeInput} options={options} defaultValue='Gender' />
			<Input value={input[name]} onChange={changeInput}type='text' name={name} placeholder={pref + name} />
			<Input value={input.age} onChange={changeInput}type='number' name={age} placeholder={pref + age}/>
			<Input value={input.balance} onChange={changeInput}type='number' name={balance} placeholder={pref + balance} />
			<Button className='addUeser' type='submit' onClick={clickButton}>Add User</Button>
		</form>
	 );
}

export default AddNewUser;