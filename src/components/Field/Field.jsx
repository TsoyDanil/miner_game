import React from "react";
import { useState } from "react";
import './Field.css'
import FieldBlock from "./FieldBlock/FieldBlock";
import InfoMenu from "../InfoMenu/InfoMenu";

const Field = () => {
    const [field, setField] = useState([])
    const [tries, setTries] = useState(0)


    const clickBlock = (i) => {
        const index = field.findIndex(block => block.key === i)
        const copyArray = [...field]
        if (copyArray[index].hasItem === true){
            copyArray[index].className = 'FieldBlock__with_item'
        } else{
            copyArray[index].className = 'FieldBlock__digged'
        }

        const copyTries = tries + 1

        setField(copyArray)
        setTries(copyTries)
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
        setTries(0)
    }

    return (
        <div className="Field">
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
