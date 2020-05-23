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
export const getEmploi = data => {
    console.log("emploi", data);
    return request({
        url: '/api/emploi/one',
        method: 'POST',
        data
    })
};
export const supprimerEmploi = data => {
    console.log("emploi", data);
    return request({
        url: '/api/emploi/deleteEmploi',
        method: 'POST',
        data
    })
};
export const updateEmploi = data => {
    console.log("emploi", data);
    return request({
        url: '/api/emploi/updateEmploi',
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
export const addEmploiTofavorite = data => {
    console.log("emploi", data);
    return request({
        url: '/api/emploi/favorisAdd',
        method: 'POST',
        data
    })
};
export const removeEmploiTofavorite = data => {
    console.log("emploi", data);
    return request({
        url: '/api/emploi/favorisRemove',
        method: 'POST',
        data
    })
};
export const shortListIntersted = data => {
    console.log("emploi", data);
    return request({
        url: '/api/emploi/candidatIntersted',
        method: 'POST',
        data
    })
};
export const ListIntersted = data => {
    console.log("emploi", data);
    return request({
        url: '/api/emploi/emploiIntersted',
        method: 'POST',
        data
    })
};