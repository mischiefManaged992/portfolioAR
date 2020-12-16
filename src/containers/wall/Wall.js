import React from 'react';
import Classes from './Wall.css';


const wall = () => {
    return (
        <div className={Classes.container}>
            <div className={Classes.innercontainer}>
                <div className={Classes.maintext}>
                    <p className={Classes.name}>Anusha Ravi</p>
                    <p className={Classes.message}> Software Engineer | Graduate Student, MS IS, TAMU </p>
                </div>
                <div className={Classes.personalInfo}>
                    <div className={Classes.links}>
                        <a href="https://drive.google.com/file/d/1gRdru8E8Ij-kfY80BJkjlnCymLiYsVkx/view?usp=sharing" target="_blank">Resume</a>
                        <a href="https://www.linkedin.com/in/anusharavi92/" target="_blank">LinkedIn</a>
                    </div>
                    <p>anusha.ravi92@tamu.edu | +1 661-557-4607</p>
                </div>
            </div>
        </div>
    );
};

export default wall;