import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProfilePicture from './../../Assets/ProfilePicture.svg';
import { registerServiceWorker, getPermissionForNotifications, subscribe, supportsPushNotifications } from './utilities';
// import axios from 'axios';

/*
    This component is the Action Centre with Search, notifications component,
    and the avatar components, along with at-a-glance stats
    of the user's completion status;
*/

const ActionCentre = (props) => {

    const courses = props.courses;
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
            <button
                onClick={async () => {
                    if (supportsPushNotifications()) {
                        const registeredServiceWorker = await registerServiceWorker()
                            .catch(err => {
                                console.log("There was an error in registering the service worker:\n", err)
                            });

                        let permission = Notification.permission;

                        if (permission !== 'granted') {
                            permission = await getPermissionForNotifications();
                        }

                        const subscribeOptions = {
                            userVisibleOnly: true,
                            applicationServerKey: "BMOPb7ypTabNjOyGi4nyHUrQm6xGJPO5Ts6JZQHSeWXk7Yul0Z5kJt-TlUAJMYu7WlzTYnbVZR-ctvmVxOZW_Hc"
                        }
                        
                        const readyServiceWorker = await navigator.serviceWorker.ready;
                        const pushSubscription = await readyServiceWorker.pushManager.subscribe(subscribeOptions)

                        axios.post('https://cnk-notifs-backend.herokuapp.com/subscription/add', pushSubscription)
                        .then(response => {
                            console.log("Subscription saved on server:", response.data);
                        })
                        .catch(err => {
                            console.log("Error saving subscription:", err);
                        })

                    }
                }}
                className="row-span-1 col-span-1 lg:col-span-1 lg:row-span-1 h-12 rounded-md flex flex-row items-center justify-center"
            >
                <i className="fas fa-bell"></i>
            </button>
            <button className="row-span-1 col-span-1 lg:col-span-1 lg:row-span-1 h-12 rounded-md flex flex-row items-center justify-center">
                <img src={ProfilePicture} />
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

// class ActionCentre extends React.Component {
//     constructor(props) {
//         super(props);
//     }


//     // check to see if push notifications are supported;
//     isPushNotificationSupported() {
//         return "serviceWorker" in navigator && "PushManager" in window;
//     }

//     // register the service worker;
//     registerServiceWorker() {
//         return navigator.serviceWorker.register('/sw.js');
//     }

//     async askUserPermission() {
//         return await Notification.requestPermission();
//     }

//     async createNotificationSubscription() {
//         const serviceWorker = await navigator.serviceWorker.ready;

//         return await serviceWorker.pushManager.subscribe({
//             userVisibleOnly: true,
//             applicationServerKey: "pushServerPublicKey"
//         })
//     }

//     async postSubscription(subscription) {
//         const response = await fetch(`https://push-notification-demo-server.herokuapp.com/subscription`, {
//             credentials: "omit",
//             headers: { "content-type": "application/json;charset=UTF-8", "sec-fetch-mode": "cors" },
//             body: JSON.stringify(subscription),
//             method: "POST",
//             mode: "cors"
//         });
//         return await response.json();
//     }

//     render(props) {

//         return (

//         )
//     }
// };

export default ActionCentre;