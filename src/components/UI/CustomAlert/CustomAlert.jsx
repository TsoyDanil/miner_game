import React from "react";
import './CustomAlert.css'
import Button from "../Button/Button";
import { useState } from "react";

const CustomAlert = (props) => {

    const [messageSeen, setMessageSeen] = useState(false)

    const [classes, setClasses] = useState(['CustomAlert'])

    const hideAlert = () => {
        let copyArray = [...classes]
        if (copyArray.length > 1){
            copyArray.splice(1, 1)
            copyArray.push('CustomAlert__hidden')
        }
        else{
            copyArray.push('CustomAlert__hidden')
        }
        setClasses(copyArray)
    }

    return (
        <div className='CustomAlert'>
            <p>{props.text}</p>
            <Button
                buttonName = 'OK'
                onClick = {hideAlert}
            />
        </div>
    )
}

export default CustomAlert