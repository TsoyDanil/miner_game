import React from "react";
import './FieldBlock.css'

const FieldBlock = (props) => {
    return (
        <div 
            className = 'FieldBlock'
            onClick = {props.fieldBlockClick}
            item = {props.item}
            status = {props.status}
        >
        </div>
    )
}

export default FieldBlock