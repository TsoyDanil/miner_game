import React from "react";
import { useState } from "react";
import './Field.css'
import FieldBlock from "./FieldBlock/FieldBlock";
import Button from "../../containers/Button/Button";

const Field = () => {

    const [field, setField] = useState([])

    const clickBlock = (i) => {
        const index = field.findIndex(block => block.key === i)
        const copyArray = [...field]
        copyArray[index].status = true
        setField(copyArray)
    }

    const buildField = () => {
        const randomNumber = Math.floor(Math.random()*36)
        let arrayHolder = []
        for (let i = 0; i < 36; i++){
            arrayHolder.push({
                key: i, 
                status: false,
                item: i === randomNumber ? true : false
            })
        }
        setField([...arrayHolder])
        console.log(field)
    }

    return (
        <div className="Field">
            <Button
                buttonName = 'BUILD FIELD'
                onClick = {buildField}
            />
            
            {
                field.map((block) => {
                    return <FieldBlock
                        key = {block.key}
                        className = {block.status ? 'FieldBlock__digged' : 'FieldBlock'}
                        click = {() => {clickBlock(block.key)}}
                    />
                })
            }
        </div>
    )
}

export default Field
