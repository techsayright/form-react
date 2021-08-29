import React from 'react'
import './Output.css'

export const Output = (props) => {
    return (
        <div className="outputDiv">
            <div className="name">
                <strong>Name</strong>: {props.sendingData.name}
            </div>
            <div className="email">
                <strong>Email</strong>:{props.sendingData.email}
            </div>
            <div className="phone">
                <strong>Phone</strong>:{props.sendingData.phone}
            </div>
            <div className="age">
                <strong>Age</strong>:{props.sendingData.age}
            </div>
            <div className="gender">
                <strong>Gender</strong>:{props.sendingData.gender}
            </div>
            <div className="hobby">
                {/* <strong>Hobbies</strong>: {props.sendingData.hobby1} {props.sendingData.hobby2} {props.sendingData.hobby3} {props.sendingData.hobby4} */}
                {/* <strong>Hobbies</strong>: {props.sendingData.hobby && props.sendingData.hobby.join(' ')}  */}
                <strong>Hobbies</strong>: {props.sendingData.hobby.length===1 ? props.sendingData.hobby : props.sendingData.hobby.join(', ')} 
            </div>
            <div className="country">
                <strong>Country</strong>:{props.sendingData.country}
            </div>
            <div className="password">
                <strong>Password</strong>:{props.sendingData.password}
            </div>
        </div>
    )
}
