import React from "react";
import {NotificationManager} from 'react-notifications';

const notification = (type, title, message) => {
    switch (type) {
        case 'success':
            NotificationManager.success(message, title);
            break;
        case 'warning':
            NotificationManager.warning(message, title);
            break;
        case 'error':
            NotificationManager.error(message, title);
            break;
    }

};
export default notification;