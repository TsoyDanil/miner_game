import React from "react";
import { useState } from "react";
import './Field.css'
import Button from "../UI/Button/Button";
import FieldBlock from "./FieldBlock/FieldBlock";
import InfoMenu from "../InfoMenu/InfoMenu";
import CustomAlert from "../UI/CustomAlert/CustomAlert";

const Field = () => {
    const [tipShown, setTipShown] = useState(false)
    const [alertText, setAlertText] = useState('')
    const [field, setField] = useState([])
    const [tries, setTries] = useState(0)
    const [showAlert, setShowAlert] = useState(false)
    const [keepPlaying, setKeepPlaying] = useState(false)

    const slideAlert = (text) => {
        setAlertText(text)
        setShowAlert(true)
    }

    const clickBlock = (i) => {
        const index = field.findIndex(block => block.key === i)
        if (keepPlaying && field[index].digged === false){
            let triesHolder = tries + 1
            setTries(triesHolder)
            const copyArray = [...field]
            if (copyArray[index].hasItem === true){
                copyArray[index].className = 'FieldBlock FieldBlock__with_item gradient-border'
                slideAlert(`GREAT! YOU FOUND TREASURE IN ${triesHolder} TRIES`)
                setKeepPlaying(false)
            } else{
                copyArray[index].className = 'FieldBlock FieldBlock__digged gradient-border'
                copyArray[index].digged = true
            }
            setField(copyArray)
        } else if (!keepPlaying){
            slideAlert('YOU ALREADY FOUND TREASURE. BUILD FIELD AGAIN TO PLAY')
        }
    }

    const hideAlert = () => {
            setShowAlert(false)
    }

    const buildField = () => {
        const randomNumber = Math.floor(Math.random()*36)
        let arrayHolder = []
        for (let i = 0; i < 36; i++){
            arrayHolder.push({
                key: i, 
                digged: false,
                hasItem: i === randomNumber ? true : false,
                className: 'FieldBlock FieldBlock__unchecked gradient-border'
            })
        }
        setTipShown(false)
        setKeepPlaying(true)
        setShowAlert(false)
        setField([...arrayHolder])
        setTries(0)
    }

    const showTip = () => {
        if (tipShown){
            slideAlert(`I ALREADY GAVE YOU TIP`)
            return
        }
        const index = field.findIndex(block => block.hasItem === true)
        let indexArray = [index]
        for (let i = 0; i < 5; i++){
            let randomIndex = Math.floor(Math.random()*field.length)
            if (index === randomIndex){
                randomIndex = Math.floor(Math.random()*field.length)
            }
            indexArray.push(randomIndex)
        }
        const copyArray = [...field]
        indexArray.forEach((index) =>{
            if (!copyArray[index].digged){
                copyArray[index].className = 'FieldBlock FieldBlock__marked gradient-border'
            }
        })
        setField(copyArray)
        slideAlert(`I MARKED BLOCKS WHERE TREASURE COULD BE`)
        setTipShown(true)
    }

    const customAlert =  
    <CustomAlert
        alertButtonClick = {hideAlert}
        text = {alertText}
        show = {showAlert}
    />

    const infoMenu =             
    <InfoMenu
        buildField = {buildField}
        tries = {tries}
    />

    const preparedField = field.map((block) => {
        return <FieldBlock
            key = {block.key}
            className = {block.className}
            click = {() => {clickBlock(block.key)}}
        />
    }) 

    const tipButton = keepPlaying ? 
    <Button
        buttonName = {'SHOW TIP'}
        onClick = {showTip}
    />
    :
    <Button
        buttonName = {'FIRST BUILD FIELD'}
    />

    return (
        <div className="Field">
            {customAlert}
            {infoMenu}
            <div className="Field_blocks_container">
                {preparedField}
            </div>
            <div className="Tip_button_container">
                {tipButton}
            </div>
        </div>
    )
}

export default Field
