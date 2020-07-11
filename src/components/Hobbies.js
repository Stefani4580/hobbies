import React from 'react'

function Hobbies(props) {
    return (
        <div>
            <h2>My favorite hobby is</h2>
            <h3>{props.name}</h3>
            <img src={props.pic} alt="hobby"/>
            <p>{props.details}</p>
        </div>
    )
}

export default Hobbies
