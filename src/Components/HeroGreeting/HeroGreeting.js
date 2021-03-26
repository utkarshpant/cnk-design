import React from 'react';
import HeroImage from './../../Assets/HeroIllustration.svg';

const HeroGreeting = (props) => {
    return(
        <div className="HeroGreeting grid grid-cols-2 h-44 bg-gray-100 flex flex-row items-center rounded-md">
            <div className="p-4">
                <span className="block font-baloo text-3xl font-semibold">
                    Hello Josh!
                </span>
                <span className="block text-sm">
                    It's good to see you again.
                </span>
            </div>
            <div className="relative w-full h-full">
                <img src={HeroImage} className="absolute bottom-0 h-46"/>
            </div>
        </div>
    )
}

export default HeroGreeting;