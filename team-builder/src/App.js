import React from 'react';
import Form from './Form'
import {useState} from 'react'
import Employees from './Employees'

import './App.css';

function App() {
  const [note, newNote] = useState([{
    title: '', 
    email: '', 
    role: ''}])
  
  return (
    <div className="App">
      <h1>Employees</h1>
 <Form />
 <Employees notes={note}  newNote ={newNote} />
    </div>
  );
}

export default App;
