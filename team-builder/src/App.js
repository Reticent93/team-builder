import React from 'react';
import Form from './Form'
import {useState} from 'react'
import Employees from './Employees'

import './App.css';

function App() {
  const [note, newNote] = useState([{
    name: '', 
    email: '', 
    role: ''}])
  
  return (
    <div className="App">
      <h1>Employees</h1>
 <Form notes={note} newNote={newNote} />
 <Employees notes={note} />
    </div>
  );
}

export default App;
