import React from 'react'



const Employees =(props) => {
    console.log('employee', props)
    return(
       
        
       
            <div className = 'note' >
                <h2>{props.title}</h2>
                <h2>{props.email}</h2>
                <h2>{props.role}</h2>
            
        

        </div>
    )
}
export default Employees;