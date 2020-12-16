import React from 'react';
import Classes from './NavItems.css';

const navitems = (props) => {

    return (
        <div className={Classes.container}>
            <button onClick={props.clickAction}>{props.type}</button>
        </div>
    );
};

export default navitems;