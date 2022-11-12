import React from "react";
import { useState } from "react";
import './Field.css'
import FieldBlock from "./FieldBlock/FieldBlock";
import InfoMenu from "../InfoMenu/InfoMenu";
import CustomAlert from "../UI/CustomAlert/CustomAlert";

const Field = () => {
    const [field, setField] = useState([])
    const [tries, setTries] = useState(0)
    const [keepPlaying, setKeepPlaying] = useState(true)

    const clickBlock = (i) => {
        if (keepPlaying){
            const index = field.findIndex(block => block.key === i)
            const copyArray = [...field]
            if (copyArray[index].hasItem === true){
                copyArray[index].className = 'FieldBlock__with_item'
                setKeepPlaying(false)
            } else{
                copyArray[index].className = 'FieldBlock__digged'
            }
            const copyTries = tries + 1
            setField(copyArray)
            setTries(copyTries)
        } else {
            alert('YOU ALREADY FOUND TREASURE. BUILD FILED AGAIN TO PLAY')
        }
    }

    const buildField = () => {
        setKeepPlaying(true)
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
            <CustomAlert/>
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
