import React from 'react'



const Employees =(props) => {
    console.log('employee', props)
    return(
       
        
       <>
           {props.notes.map((note, index) => (
            <div className = 'note' key={index}>
                <h2>{note.name}</h2>
                <h2>{note.email}</h2>
                <h2>{note.role}</h2>
            
                </div>
))}
        </>
    )
}
export default Employees;