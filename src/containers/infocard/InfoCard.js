import React from 'react';
import Classes from './InfoCard.css';

const infoCard = (props) => {
    return(
        <div className={Classes.container}>
            {/* <div style={{ backgroundImage:`url(${props.logoUrl})` }} className={Classes.logocontainer}>
                
            </div>
            <div className={Classes.leftcontainer}>
                <p>{props.title}</p>
                <p>{props.org}</p>
            </div>
            <div className={Classes.rightcontainer}>
                <p>{props.place}</p>
                <p>{props.time}</p>
            </div> */}
            <div style={{ backgroundImage:`url(${props.InfoImgUrl})` }} className={Classes.infoimgcontainer}>

            </div> 
            <div className={Classes.infotitlecontainer}>
                <h2>{props.title}</h2>
            </div>
            <div className={Classes.cntcontainer}>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default infoCard;