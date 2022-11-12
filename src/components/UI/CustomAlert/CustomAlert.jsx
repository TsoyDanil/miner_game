import React from "react";
import './CustomAlert.css'

const CustomAlert = (props) => {

    const style = {
        top: props.show ? '50%' : '-500%'
    }

    return (
        <div className="CustomAlert" style={style}>
            <p>{props.text}</p>
            <button className="CustomAlert__button" onClick={props.alertButtonClick}>OK</button>
        </div>
    )
}

export default CustomAlert