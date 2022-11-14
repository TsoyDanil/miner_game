import React from "react";
import './InfoMenu.css'
import Button from "../UI/Button/Button";
import Counter from "../../containers/Counter/Count";

const InfoMenu = (props) => {
    return (
        <div className="InfoMenu">
        <Button
            buttonName = {'BUILD FIELD'}
            onClick = {props.buildField}
        />

        <Counter
            text = {props.tries}
        />
        </div>
    )
}

export default InfoMenu