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

    const clickBlock = (i) => {
        if (keepPlaying){
            setTries(tries + 1)
            const index = field.findIndex(block => block.key === i)
            const copyArray = [...field]
            if (copyArray[index].hasItem === true){
                copyArray[index].className = 'FieldBlock__with_item gradient-border'
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
        setTipShown(false)
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

    const showTip = () => {
        if (!tipShown){
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
                copyArray[index].className = 'FieldBlock__marked gradient-border'
            })
            setField(copyArray)
            setAlertText(`I MARKED BLOCKS WHERE TREASURE COULD BE`)
            setShowAlert(true)
            setTipShown(true)
        } else{
            setAlertText(`I ALREADY GAVE YOU TIP`)
            setShowAlert(true)
        }
    }

    const tipButton = keepPlaying ? 
    <Button
        buttonName = {'SHOW TIP'}
        onClick = {showTip}
    />
    :
    ''

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
            <div className="Tip_button_container">
                {tipButton}
            </div>
        </div>
    )
}

export default Field
