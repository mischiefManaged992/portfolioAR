import React from 'react';
import Classes from './NavigationBar.css';
import NavItems from '../navbar/navitems/NavItems';

const navigationbar = () => {

    const onClickHandler = (val) => {
        if(val === 'Passions')
            window.scrollTo(0, 620);
        else if(val === 'Accomplishments')
            window.scrollTo(0, 2150);
        // else if(val === 'projects')
        //     window.scrollTo(0, 2800);
    }

    return (
        <div className={Classes.container}>
            <NavItems clickAction={() => onClickHandler('Passions')} type="Passions" />
            <NavItems clickAction={() => onClickHandler('Accomplishments')} type="Accomplishments"/>
            {/* <NavItems clickAction={() => onClickHandler('projects')}type="Projects"/> */}
        </div>
    );
};

export default navigationbar;