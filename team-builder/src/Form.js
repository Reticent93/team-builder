import React from 'react';
import { useState } from 'react';

const Form = (props) => {
	const initialTeam = { name: '', email: '', role: '' };
	const [ newTeam, setNewTeam ] = useState('initialTeam');

	const handleChange = (event) => {
		setNewTeam(event.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('handle',newTeam);
	};
	// const updatedEmployee = props.setNewTeam([newTeam, ...props.notes]);

	const resetForm = () => {
		setNewTeam(initialTeam);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input onChange={handleChange} type="text" name="title" placeholder="Name" />
				<input onChange={handleChange} type="email" name="title" placeholder="Email" />
				<input onChange={handleChange} type="text" name="title" placeholder="Role" />
				{/* <textarea name = 'body' /> */}
				<button type="submit">Submit</button>
				<button type="reset" onClick={resetForm}>
					Reset
				</button>
			</form>
		</div>
	);
};

export default Form;
