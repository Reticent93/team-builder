import React from 'react';
import Form from './Form'
import {useState} from 'react'
import Employees from './Employees'

import './App.css';

function App() {
  const [note, newNote] = useState([{
    name: 'Dave Mack', 
    email: 'WebDevDave@yahoo.com', 
    role: 'Web Developer'}])

   const addNewEmployee = data =>{
     newNote([...note, data])
   }
  
  return (
    <div className="App">
      <h1>Employees</h1>
 <Form notes={note} newNote={newNote}  addNewEmployee={addNewEmployee}/>
 <Employees notes={note} />
    </div>
  );
}

export default App;
