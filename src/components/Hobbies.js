import React from 'react'

function Hobbies(props) {
    return (
        <div>
            <div className="hobbyCard">
                <h2 className="name">{props.name}</h2>
                <div className="picDets">
                <img className="pic" src={props.pic} alt="hobby"/>
                <p className="details">{props.details}</p>               
                </div>
            </div>
        </div>
    )
}

export default Hobbies
