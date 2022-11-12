import React from "react";
import './FieldBlock.css'

const FieldBlock = (props) => {
    return (
        <div 
            className = {props.className}
            onClick = {props.click}
        >
        </div>
    )
}

export default FieldBlock