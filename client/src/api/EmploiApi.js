import request from './request';

export const createEmplois = data => {
    return request({
        url: '/api/emploi/create',
        method: 'POST',
        data
    });
};

export const myEmploiList = data => {
    console.log("emploi", data);
    return request({
        url: '/api/emploi/mine',
        method: 'POST',
        data
    })
};
export const myEmploiListUpdate = data => {
    console.log("emploi", data);
    return request({
        url: '/api/emploi/update',
        method: 'POST',
        data
    })
};
