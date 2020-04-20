import request from './request';
export const createEmplois = data => {
    return request({
        url: '/api/emploi/create',
        method: 'POST',
        data
    });
};
