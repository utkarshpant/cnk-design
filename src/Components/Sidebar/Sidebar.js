import React from 'react';
import FLogo from './../../Assets/FLogo.svg';
import ProfileImage from './../../Assets/Profile.svg';
import CertificatesIcon from './../../Assets/Certificates.svg';
import HomeIcon from './../../Assets/Home.svg';
import LogoutIcon from './../../Assets/Logout.svg';
import MessagesIcon from './../../Assets/Messages.svg';
import SettingsIcon from './../../Assets/Settings.svg';

const Sidebar = (props) => {
    return (
        <div className="Sidebar w-full lg:w-2/3 h-full lg:m-2 gap-2 lg:rounded-2xl lg:top-0 bg-black text-white flex flex-row lg:flex-col items-center justify-between p-4">
            <div className="logo w-8 h-1/6 m-4 flex flex-col justify-center items-center">
                <img src={FLogo} />
            </div>
            <div className="SidebarNavs w-full h-full p-2 flex flex-row lg:flex-col justify-between items-center">
                {/* <img src={SidebarNavs} className="m-4" /> */}
                <div className="m-5 w-2/3 flex flex-row lg:flex-col justify-evenly">
                    <div className="cursor-pointer home h-10 w-10 p-3 my-2 ">
                        <img src={HomeIcon} className="h-4 w-4" />
                    </div>
                    <div className="cursor-pointer certificates h-10 w-10 p-3 my-2 ">
                        <img src={CertificatesIcon} className="h-4 w-4" />
                    </div>
                    <div className="cursor-pointer profile h-10 w-10 p-3 my-2 ">
                        <img src={ProfileImage} className="h-4 w-4" />
                    </div>
                    <div className="cursor-pointer messages h-10 w-10 p-3 my-2 ">
                        <img src={MessagesIcon} className="h-4 w-4" />
                    </div>
                    <div className="cursor-pointer settings h-10 w-10 p-3 my-2 ">
                        <img src={SettingsIcon} className="h-4 w-4" />
                    </div>
                </div>
                <div className="cursor-pointer logout h-10 w-10 p-3 lg:my-5">
                    <img src={LogoutIcon} className="h-4 w-4" />
                </div>
            </div>
        </div>
    )
};

export default Sidebar;