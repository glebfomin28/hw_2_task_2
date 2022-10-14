import React, {useState} from 'react';

export const IconSwitch = (props) => {
    const [flag, setFlag] = useState(2)

    const onSwitch = () => {
        setFlag(flag + 1)
        props.onSwitch(flag)

    }

    return (
        <div className="iconContainer">
            <img onClick={onSwitch} className="icon" src={props.icon} alt="icon"/>
        </div>
    );
}
