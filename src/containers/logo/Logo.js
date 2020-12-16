import React from 'react';
import Classes from '../logo/Logo.css';

const logo = (props) => {
    return (
        <div className={Classes.container}>
            <div className={Classes.image} onClick={props.clickAction}></div>
        </div>
    );
};

export default logo;