import React, {Fragment} from 'react';
import { SingleWeek } from '../miniComponents/SingleWeek';
//import { courseInfo } from '../props/CourseInfo';
import './CourseWeeks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, faCheckCircle, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export function CourseWeeks(){
    //courseName = courseInfo.courName;
    //courseWeeks = courseInfo.CourseWeeks;
    return(
        <Fragment>
            <div className="course-link">
                <FontAwesomeIcon icon={fas, faChevronLeft} className="week-goal"/><a>Courses</a>
            </div>
            <div className="sidebar-margin">
                <h1 className="course-title">Intro to Blockchain</h1>
                <div className="course-week-margin">
                    <h1 className="course-title">Week 1</h1>
                    <ul className="course-week">
                        <li><FontAwesomeIcon icon={fas, faCheckCircle} className="week-goal completed"/>Introduction</li>
                        <li><FontAwesomeIcon icon={fas, faCheckCircle} className="week-goal completed"/>Introduction</li>
                        <li><FontAwesomeIcon icon={fas, faCheckCircle} className="week-goal"/>Introduction</li>
                    </ul>
                </div>
                <div className="course-week-margin">
                    <h1 className="course-title">Week 2</h1>
                    <ul className="course-week">
                        <li><FontAwesomeIcon icon={fas, faCheckCircle} className="week-goal completed"/>Introduction</li>
                        <li><FontAwesomeIcon icon={fas, faCheckCircle} className="week-goal completed"/>Introduction</li>
                        <li><FontAwesomeIcon icon={fas, faCheckCircle} className="week-goal"/>Introduction</li>
                    </ul>
                </div>
                <div className="course-week-margin">
                    <h1 className="course-title">Week 3</h1>
                    <ul className="course-week">
                        <li><FontAwesomeIcon icon={fas, faCheckCircle} className="week-goal completed"/>Introduction</li>
                        <li><FontAwesomeIcon icon={fas, faCheckCircle} className="week-goal completed"/>Introduction</li>
                        <li><FontAwesomeIcon icon={fas, faCheckCircle} className="week-goal"/>Introduction</li>
                    </ul>
                </div>
                <div className="course-week-margin">
                    <h1 className="course-title">Week 4</h1>
                    <ul className="course-week">
                        <li><FontAwesomeIcon icon={fas, faCheckCircle} className="week-goal completed"/>Introduction</li>
                        <li><FontAwesomeIcon icon={fas, faCheckCircle} className="week-goal completed"/>Introduction</li>
                        <li><FontAwesomeIcon icon={fas, faCheckCircle} className="week-goal"/>Introduction</li>
                    </ul>
                </div>
                <div className="course-week-margin">
                    <h1 className="course-title">Week 5</h1>
                    <ul className="course-week">
                        <li><FontAwesomeIcon icon={fas, faCheckCircle} className="week-goal completed"/>Introduction</li>
                        <li><FontAwesomeIcon icon={fas, faCheckCircle} className="week-goal completed"/>Introduction</li>
                        <li><FontAwesomeIcon icon={fas, faCheckCircle} className="week-goal"/>Introduction</li>
                    </ul>
                </div>
            </div>
            


        </Fragment>  
    );
}
