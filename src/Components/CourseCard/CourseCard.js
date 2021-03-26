import React from 'react';

const CourseCard = (props) => {
    const course = props.course;

    return (
        <div className="h-20 w-full bg-gray-100 rounded-md my-4 grid grid-cols-12 gap-5 items-center p-2 text-sm">
            <span className="hidden md:block h-12 w-12 rounded-md col-span-1 bg-gradient-to-r from-yellow-400 to-pink-500 text-white text-center py-3">PLC</span>
            <div className="CourseDetails col-span-4 md:col-span-4 m-2 flex flex-col items-start justify-center text-sm h-12">
                <span className="font-baloo font-semibold text-md lg:text-lg">{course.name}</span>
                <span className="text-xs lg:text-md">{course.author}</span>
            </div>
            <div className="CourseDuration col-span-2 h-full flex flex-row items-center justify-center gap-2">
                <i class="fas fa-clock"></i>
                <span className="text-xs">{course.duration}</span>
            </div>
            <div className="CourseRating col-span-2 h-full flex flex-row items-center justify-center gap-2">
                <i class="fas fa-fire"></i>
                <span className="text-xs">{course.rating}</span>
            </div>
            <button className="bg-none rounded-md border-2 border-black col-span-4 md:col-span-3 h-12 text-black text-bold text-xs px-6 py-2 md:py-1">
                View
            </button>
        </div>
    )
};

export default CourseCard;