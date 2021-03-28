// check for compatibility;
function supportsPushNotifications() {
    return 'serviceWorker' in navigator && 'PushManager' in window;
}

// register serviceWorker;
async function registerServiceWorker() {
    const registeredServiceWorker = await navigator.serviceWorker.register('/sw.js');
    return registeredServiceWorker;
}

// get permission to show notifications;
async function getPermissionForNotifications() {
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
        throw Error('Permission to show notifications was denied');
    } else {
        return permission;
    }
}

async function subscribe() {
    console.log("Creating subscription for existing sw");
    const options = {};
    const serviceWorker = await navigator.serviceWorker.ready;
    const subscription =  await serviceWorker.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: "BMOPb7ypTabNjOyGi4nyHUrQm6xGJPO5Ts6JZQHSeWXk7Yul0Z5kJt-TlUAJMYu7WlzTYnbVZR-ctvmVxOZW_Hc"
    });
    console.log("Subscription ID", subscription);
    return subscription;
}

export { supportsPushNotifications, registerServiceWorker, getPermissionForNotifications, subscribe };