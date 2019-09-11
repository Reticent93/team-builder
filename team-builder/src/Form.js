import React from 'react';
import { useState } from 'react';

const Form = (props) => {
	const initialTeam = { name: '', email: '', role: '' };
	const [ newTeam, setNewTeam ] = useState(initialTeam);

	const handleChange = (event) => {
		setNewTeam({...newTeam, [event.target.name]:event.target.value});

	};
	const handleSubmit = (e) => {
		e.preventDefault();
		
		// props.setNewTeam([newTeam, ...props.notes])
		console.log('handle',newTeam);
		resetForm(e)
	};
	// const updatedEmployee = props.setNewTeam([newTeam, ...props.notes]);

	const resetForm = () => {
		setNewTeam(initialTeam);
	};

	return (
		
			<form onSubmit={handleSubmit}>
				<input onChange={handleChange} type="text" name="name" placeholder="Name" value= {newTeam.name} />
				<input onChange={handleChange} type="email" name="email" placeholder="Email"  value= {newTeam.email} />
				<input onChange={handleChange} type="text" name="role" placeholder="Role" value= {newTeam.role}  />
				{/* <textarea name = 'body'  /> */}
				<button type="submit">Submit</button>
				<button type="reset" onClick={resetForm}>
					Reset
				</button>
			</form>
			
		
	);
};

export default Form;
