import React from 'react';
import Classes from './ProjectCard.css';

const projCard = (props) => {
    return(
        <div className={Classes.container}>
            <div className={Classes.title}>
                <p>{props.title}</p>
            </div>
            {/* <div className={Classes.content}>
                <p>{props.content}</p>
            </div> */}
        </div>
    )
}

export default projCard;