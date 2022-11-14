import React from "react";
import { useState } from "react";
import './Field.css'
import FieldBlock from "./FieldBlock/FieldBlock";
import InfoMenu from "../InfoMenu/InfoMenu";
import CustomAlert from "../UI/CustomAlert/CustomAlert";

const Field = () => {
    const [alertText, setAlertText] = useState('')
    const [field, setField] = useState([])
    const [tries, setTries] = useState(0)
    const [showAlert, setShowAlert] = useState(false)
    const [keepPlaying, setKeepPlaying] = useState(true)

    const clickBlock = (i) => {
        if (keepPlaying){
            setTries(tries + 1)
            const index = field.findIndex(block => block.key === i)
            const copyArray = [...field]
            if (copyArray[index].hasItem === true){
                copyArray[index].className = 'FieldBlock__with_item gradient-border'
                console.log(`Tries2: ${tries}`)
                setAlertText(`GREAT! YOU FOUND TREASURE IN ${tries + 1} TRIES`)
                setShowAlert(true)
                setKeepPlaying(false)
            } else{
                copyArray[index].className = 'FieldBlock__digged gradient-border'
            }
            setField(copyArray)
        } else {
            setAlertText('YOU ALREADY FOUND TREASURE. BUILD FILED AGAIN TO PLAY')
            setShowAlert(true)
        }
    }

    const hideAlert = () => {
            setShowAlert(false)
    }

    const buildField = () => {
        setKeepPlaying(true)
        setShowAlert(false)
        const randomNumber = Math.floor(Math.random()*36)
        let arrayHolder = []
        for (let i = 0; i < 36; i++){
            arrayHolder.push({
                key: i, 
                status: false,
                hasItem: i === randomNumber ? true : false,
                className: 'FieldBlock gradient-border'
            })
        }
        setField([...arrayHolder])
        setTries(0)
    }

    return (
        <div className="Field">
            <CustomAlert
                alertButtonClick = {hideAlert}
                text = {alertText}
                show = {showAlert}
            />
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
