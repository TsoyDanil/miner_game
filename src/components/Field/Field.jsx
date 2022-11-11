import React from "react";
import { useState } from "react";
import './Field.css'
import FieldBlock from "./FieldBlock/FieldBlock";

const Field = (props) => {
    let fieldBlockHolder = []
    for (let i = 0; i < 36; i++){
        fieldBlockHolder.push(
            <FieldBlock/>
        )
    }
    return (
        <div>

        </div>
    )
}

export default Field
