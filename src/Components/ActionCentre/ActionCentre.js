import React from 'react';
import ProfilePicture from './../../Assets/ProfilePicture.svg';

// import { Container } from 'react-bootstrap';
/*
    This component is the Action Centre with Search, notifications component,
    and the avatar components, along with at-a-glance stats
    of the user's completion status;
*/

class ActionCentre extends React.Component {
    constructor(props) {
        super(props);
    }

    render(props) {
        const courses = this.props.courses;
        let completed = 0;
        let inProgress = 0;
        courses.forEach(course => {
            if (course.status == "complete") {
                completed++;
            } else if (course.status == "in-progress") {
                inProgress++;
            }
        });
        return (
            <div className="ActionCentre grid grid-cols-2 grid-rows-4 lg:grid-cols-6 lg:grid-rows-3 gap-4 h-42">
                <div className="row-span-1 col-span-2 lg:col-span-4 lg:grid-span-1 h-full rounded-md">
                    <input type="text" className="searchbar w-full h-12 p-2 bg-gray-100 rounded-md" placeholder="search" />
                </div>
                <button className="row-span-1 col-span-1 lg:col-span-1 lg:row-span-1 h-12 rounded-md flex flex-row items-center justify-center">
                    <i className="fas fa-bell"></i>
                </button>
                <button className="row-span-1 col-span-1 lg:col-span-1 lg:row-span-1 h-12 rounded-md flex flex-row items-center justify-center">
                    <img src={ProfilePicture} className="" />
                </button>
                <div className="row-span-2 col-span-1 lg:row-span-2 lg:col-span-3 bg-gray-100 rounded-md flex flex-row">
                    <span className="block flex flex-row items-center justify-center w-1/2 font-baloo font-semibold text-4xl">
                        {completed}
                    </span>
                    <span className="flex flex-row items-center w-1/2 text-sm">
                        {
                            `course${completed == 1 ? '' : 's'} completed`
                        }
                    </span>
                </div>
                <div className="row-span-2 col-span-1 lg:row-span-2 lg:col-span-3 bg-gray-100 rounded-md flex flex-row">
                    <span className="block flex flex-row items-center justify-center w-1/2 font-baloo font-semibold text-4xl">
                        {inProgress}
                    </span>
                    <span className="flex flex-row items-center w-1/2 text-sm">
                        {
                            `course${inProgress == 1 ? '' : 's'} in progress`
                        }
                    </span>
                </div>
            </div>
        )
    }
};

export default ActionCentre;