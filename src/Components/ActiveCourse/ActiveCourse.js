import React, { useState } from 'react';
import LeftArrow from './../../Assets/LeftArrow.svg';
import RightArrow from './../../Assets/RightArrow.svg';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ActiveCourse = (props) => {
    const courses = props.courses;
    let [activeCourseIndex, setActiveCourseIndex] = useState(0);

    return (
        <div className="grid lg:grid-cols-12">
            <div className="ActiveCourse_Card h-20 bg-gray-100 rounded-md row-span-1 col-span-12 lg:col-span-10 grid grid-cols-12 p-2 gap-1 items-center">
                <span className="hidden md:block h-12 w-12 rounded-md col-span-1 lg:col-span-2 bg-gradient-to-r from-yellow-400 to-pink-500 text-white text-center py-3">PLC</span>
                <div className="SubjectDetails col-span-6 lg:col-span-5 flex flex-col items-start justify-center text-sm h-12">
                    <span className="font-baloo font-semibold text-xs lg:text-lg">{courses[activeCourseIndex].name}</span>
                    <span className="text-xs lg:text-md">{courses[activeCourseIndex].author}</span>
                </div>
                <div className="ProgressBar col-span-2 w-10">
                    <CircularProgressbar
                        className="h-12"
                        value={courses[activeCourseIndex].progress}
                        text={`${courses[activeCourseIndex].progress}%`}
                        counterClockwise={true}
                        styles={buildStyles({
                            textSize: '24pt',
                            textColor: "black",
                            pathColor: "black",
                            trailColor: "rgba(255, 255, 255, 0)",
                            backgroundColor: "white",
                        })}
                    />
                </div>
                <button className="bg-black col-span-4 md:col-span-3 rounded-md h-12 text-white text-xs px-6 py-2">
                    Continue
                </button>
            </div>
            <div className="ActiveCourse_Buttons h-20 min-w-max rounded-md row-span-1 col-span-12 lg:col-span-2 flex flex-row items-center px-4 justify-start lg:justify-center gap-2 grid-cols-2">
                <button className="h-16">
                    <img src={LeftArrow} className="h-8" onClick={(event) => {
                        setActiveCourseIndex((Math.abs((courses.length + activeCourseIndex - 1) % courses.length)));
                    }} />
                </button>
                <button className="h-16" onClick={(event) => {
                    setActiveCourseIndex(((activeCourseIndex + 1) % courses.length));
                }}>
                    <img src={RightArrow} className="h-8" />
                </button>
            </div>
        </div>
    )
};

export default ActiveCourse;