import request from './request';

export const getNotification = data => {
    return request({
        url: '/api/notification/getAll',
        method: 'POST',
        data
    });
};