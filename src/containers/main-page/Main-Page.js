import React, { Component } from 'react';
import Header from '../header/Header';
import Classes from './Main-Page.css';
import Wall from '../wall/Wall';
import InfoCard from '../infocard/InfoCard';
import ProjectCard from '../infocard/projectcard/ProjectCard';
import infoimg1 from '../../assets/infoimg1.jpeg';
import infoimg2 from '../../assets/infoimg2.jpeg';
import infoimg3 from '../../assets/infoimg3.png';
import infoimg4 from '../../assets/infoimg4.jpeg';

class MainPage extends Component {

        constructor(props) {
                super(props);
                this.state = {
                        enableSticky: false
                };
        }

        scrollHandler = () => {
                if (window.pageYOffset > 180 && !this.state.enableSticky) {
                        this.setState(this.state = {
                                enableSticky: true
                        })
                }
                else if (window.pageYOffset <= 180 && this.state.enableSticky) {
                        this.setState(this.state = {
                                enableSticky: false
                        })
                        console.log(window.pageYOffset);
                }
        }

        componentDidMount() {
                window.addEventListener('scroll', this.scrollHandler, false);
        }

        componentWillUnmount() {
                window.removeEventListener('scroll', this.scrollHandler);
        }


        render() {

                return (
                        <div className={Classes.container}>
                                <Header stick={this.state.enableSticky} />
                                <Wall />

                                <div className={Classes.eduContainer}>
                                        <h3>Passions</h3>
                                        <div className={Classes.innereduContainer}>
                                                <InfoCard InfoImgUrl={infoimg3} title='Use Technology To Solve Problems'
                                                        content='I always imagined inventing something that would make a difference to the world. 
                                                        I may not be a scientist, but a software engineer is no less than a scientist. As an engineer I invent, reinvent, and build the web. 
                                                        I help build resources that are useful to people in their daily lives and this excites me like no other dream.' />
                                                <InfoCard InfoImgUrl={infoimg2} title='Volunteering'
                                                        content="I find volunteering extremely rewarding and gratifying.
                                                        In 2016, I joined Make A Difference and progressed to the role of an operations manager from an Ed-Support volunteer for Bangalore city. I can say that it has been an experience that has
                                                        brought an incredibly positive impact in my life" />
                                                <InfoCard InfoImgUrl={infoimg4} title="People and Cultures"
                                                        content='I work for the International Student Association at TAMU. 
                                                        I enjoy being around people and learning from them. I never shy away from a chance to learn from different people and the cultures they come from.'/>
                                                <InfoCard InfoImgUrl={infoimg1} title='Cooking'
                                                        content="My grandmother says I have magic hands. Haha! I absolutely enjoy cooking. Creating a new dish gives me the same thrill
                                                        as writing a new piece of code." />
                                        </div>
                                </div>
                                {/* <div className={Classes.empbgCont}>
                                        <h3>Accomplishments</h3>
                                        <div className={Classes.empContainer}>
                                                <InfoCard  title='Inern'
                                                        org='TCS'
                                                        place='Bengaluru'
                                                        time='June 2014'
                                                        content='bleh bleh blllllefh bla bla vla' />


                                                <InfoCard title='GTA'
                                                        org='UCF'
                                                        place='Orlando'
                                                        time='June 2014'
                                                        content='bleh bleh blllllefh bla bla vla' />



                                                <InfoCard  title='GTA'
                                                        org='UCF'
                                                        place='Orlando'
                                                        time='June 2014'
                                                        content='bleh bleh blllllefh bla bla vla' />

                                        </div>
                                </div> */}
                                <div className={Classes.projectContainer1}>
                                        <h3>Accomplishments</h3>
                                        <div className={Classes.projectContainer2}>
                                                <div className={Classes.items}>
                                                        <ProjectCard title='Graduate Assistant for Texas A&amp;M University'/>
                                                </div>
                                                <div className={Classes.items}>
                                                        <ProjectCard title='Successfully developed SaaS applications and database solutions as part of my graduate courses' />
                                                </div>

                                                <div className={Classes.items}>
                                                        <ProjectCard title='Led a team of 60+ volunteers toward achieving the goals of the organization at Make A Difference, India'/>
                                                </div>

                                                <div className={Classes.items}>
                                                        <ProjectCard title='Consistently rated as the most dependable employee in Tata Consultancy Services' />
                                                </div>

                                                {/* <div className={Classes.items}>
                                                        <ProjectCard title='project5' content='bleh bleh blllllefh bla bla vla' />
                                                </div> */}

                                        </div>
                                </div>
                                <div className={Classes.uniquecontainer1}>
                                        <h3>What makes me tick &#10003;</h3>
                                        <div className={Classes.uniquecontainer2}>
                                                <p> I believe what makes me unique is my ability to adapt to situations and people. In my experience,
                                                        there is nothing too hard to learn if you know how to connect with the right people to learn from. 
                                                        And that brings me to one of my favourite lines, as a Potterhead, by Albus Dumbledore, <br/> <br/>
                                                        <center>"Help will always be given to those who ask for it."</center>
                                                </p>
                                        </div>

                                </div>
                                <div className={Classes.caspielContainer}>
                                        <div className={Classes.caspielImg}></div>
                                        <div className={Classes.caspielTxt}><p>Meet Caspiel! Just thought it would be nice to introduce you all to my good boy here. </p></div>
                                </div>

                        </div>
                );
        }
};

export default MainPage;
