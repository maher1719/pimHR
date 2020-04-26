import request from './request';

export const createEmplois = data => {
    return request({
        url: '/api/emploi/create',
        method: 'POST',
        data
    });
};

export const myEmploiList = data => {
    return request({
        url: '/api/emploi/mine',
        method: 'POST',
        data
    })
};
