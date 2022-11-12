import React from "react";
import './Counter.css'

const Counter = (props) => {
    return (
        <div className="Counter">
            <p className="Counter__text">Tries: {props.text}</p>
        </div>
    )
}

export default Counter