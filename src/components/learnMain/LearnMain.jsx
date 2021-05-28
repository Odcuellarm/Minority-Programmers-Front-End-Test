import React, {Fragment} from 'react';
import { Navbar } from '../../subComponents/Navbar';

import './LearnMain.css';

export function LearnMain(){
    return(
        <Fragment>          
            <Navbar/>
            <div className="d-flex flex-column learn-main-background">
                <div className="learn-banner">
                    <button></button>
                </div>
                
                <div className="search-row d-flex justify-content-center align-items-center">
                    <input type="text" placeholder="search" className="searchbox"></input>
                    <button className="btn-filter-search">Filter Search</button>
                </div>

                <div className="comp-row d-flex flex-column align-items-center">
                    <div className="section-header d-flex align-items-center">
                        <h1 className="section-title">My Courses</h1>
                        <div className="section-btn-container">
                            <button>Back</button>
                            <button>Forth</button>
                        </div> 
                    </div>
                    <div className="course-card-container d-flex flex-row justify-content-around">
                        <div className="course-card-wrapper d-flex flex-column">

                            <button className="btn-course-reward">Earn $30</button>
                            <div className="header-course-card">
                                <h1>Intro to Blockchain</h1>
                                <h3>Blockchain Cryptocurrency Fundamentals</h3>
                            </div>
                            <div className="body-course-card">
                                <button className="btn-course-learn">Learn</button>
                                <h3>8.3/10 Modules</h3>
                                <div className="progress-total">
                                    <div className="progress-completed"></div>
                                </div>
                                <h4 className="progress-bar-tag">83% Completed</h4>
                            </div>
                        </div>

                        <div className="course-card-wrapper d-flex flex-column">

                            <button className="btn-course-reward">Earn $30</button>
                            <div className="header-course-card">
                                <h1>Intro to Blockchain</h1>
                                <h3>Blockchain Cryptocurrency Fundamentals</h3>
                            </div>
                            <div className="body-course-card">
                                <button className="btn-course-learn">Learn</button>
                                <h3 className="modules-progress">8.3/10 Modules</h3>
                                <div className="progress-total">
                                    <div className="progress-completed"></div>
                                </div>
                                <h4 className="progress-bar-tag">83% Completed</h4>
                            </div>
                        </div>

                        <div className="course-card-wrapper d-flex flex-column">

                            <button className="btn-course-reward">Earn $30</button>
                            <div className="header-course-card">
                                <h1>Intro to Blockchain</h1>
                                <h3>Blockchain Cryptocurrency Fundamentals</h3>
                            </div>
                            <div className="body-course-card">
                                <button className="btn-course-learn">Learn</button>
                                <h3>8.3/10 Modules</h3>
                                <div className="progress-total">
                                    <div className="progress-completed"></div>
                                </div>
                                <h4 className="progress-bar-tag">83% Completed</h4>
                            </div>
                        </div>

                    </div>
                    
                </div>

                <div className="comp-row d-flex flex-column align-items-center">
                    <div className="section-header d-flex align-items-center">
                        <h1 className="section-title">My Courses</h1>
                        <div className="section-btn-container">
                            <button>Back</button>
                            <button>Forth</button>
                        </div> 
                    </div>
                    <div className="course-card-container d-flex flex-row justify-content-around">
                        <div className="course-card-wrapper d-flex flex-column">

                            <button className="btn-course-reward">Earn $30</button>
                            <div className="header-course-card">
                                <h1>Intro to Blockchain</h1>
                                <h3>Blockchain Cryptocurrency Fundamentals</h3>
                            </div>
                            <div className="body-course-card">
                                <button className="btn-course-learn">Learn</button>
                                <h3>8.3/10 Modules</h3>
                                <div className="progress-total">
                                    <div className="progress-completed"></div>
                                </div>
                                <h4 className="progress-bar-tag">83% Completed</h4>
                            </div>
                        </div>

                        <div className="course-card-wrapper d-flex flex-column">

                            <button className="btn-course-reward">Earn $30</button>
                            <div className="header-course-card">
                                <h1>Intro to Blockchain</h1>
                                <h3>Blockchain Cryptocurrency Fundamentals</h3>
                            </div>
                            <div className="body-course-card">
                                <button className="btn-course-learn">Learn</button>
                                <h3 className="modules-progress">8.3/10 Modules</h3>
                                <div className="progress-total">
                                    <div className="progress-completed"></div>
                                </div>
                                <h4 className="progress-bar-tag">83% Completed</h4>
                            </div>
                        </div>

                        <div className="course-card-wrapper d-flex flex-column">

                            <button className="btn-course-reward">Earn $30</button>
                            <div className="header-course-card">
                                <h1>Intro to Blockchain</h1>
                                <h3>Blockchain Cryptocurrency Fundamentals</h3>
                            </div>
                            <div className="body-course-card">
                                <button className="btn-course-learn">Learn</button>
                                <h3>8.3/10 Modules</h3>
                                <div className="progress-total">
                                    <div className="progress-completed"></div>
                                </div>
                                <h4 className="progress-bar-tag">83% Completed</h4>
                            </div>
                        </div>

                    </div>
                    
                </div>

                <div className="loadmore-row d-flex justify-content-center align-items-center">
                     <button className="btn-load-more">Load More</button>
                </div>

          
            </div>
        </Fragment>
    )
}