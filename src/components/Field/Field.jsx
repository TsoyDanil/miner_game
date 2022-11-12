import React from "react";
import { useState } from "react";
import './Field.css'
import FieldBlock from "./FieldBlock/FieldBlock";
import InfoMenu from "../InfoMenu/InfoMenu";

const Field = () => {
    let counter = 0
    const [field, setField] = useState([])
    const [tries, setTries] = useState(counter)


    const clickBlock = (i) => {
        const index = field.findIndex(block => block.key === i)
        const copyArray = [...field]
        if (copyArray[index].hasItem === true){
            copyArray[index].className = 'FieldBlock__with_item'
        } else{
            copyArray[index].className = 'FieldBlock__digged'
            counter = counter + 1
        }
        setField(copyArray)
        setTries(counter)
    }

    const buildField = () => {
        const randomNumber = Math.floor(Math.random()*36)
        let arrayHolder = []
        for (let i = 0; i < 36; i++){
            arrayHolder.push({
                key: i, 
                status: false,
                hasItem: i === randomNumber ? true : false,
                className: 'FieldBlock'
            })
        }
        setField([...arrayHolder])
        console.log(field)
    }

    return (
        <div className="Field">
            {/* <div>
            <Button
                buttonName = 'BUILD FIELD'
                onClick = {buildField}
            />

            <Counter
                text = {tries}
            />
            </div> */}
            <InfoMenu
                buildField = {buildField}
                tries = {tries}
            />
            {
                field.map((block) => {
                    return <FieldBlock
                        key = {block.key}
                        className = {block.className}
                        click = {() => {clickBlock(block.key)}}
                    />
                })
            }
        </div>
    )
}

export default Field
