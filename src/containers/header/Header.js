import React from 'react';
import Logo from '../logo/Logo';
import NavigationBar from '../navbar/NavigationBar';
import Classes from './Header.css';

const header = (props) => {

    const onClickHandler = () => {
        window.scrollTo(0, 0);
    }

    const classToUse = props.stick == true ?  Classes.stick : Classes.container1
    
    return (
        <header className={classToUse}>
            <div className={Classes.container2}>
                <Logo className={Classes.logo} clickAction={() => onClickHandler()}/>
                <div className={Classes.filler}></div>
                <NavigationBar className={Classes.navigation}/>
            </div>
        </header>
    );
};

export default header;