import request from "./request";

export const updateUser = data => {
    return request({
        url: '/api/users/profile/update',
        method: 'POST',
        data
    });
};
export const getUsers = data => {
    return request({
        url: '/api/users/profile/search',
        method: 'POST',
        data
    });
};
export const getProfile = data => {
    return request({
        url: '/api/users/profile/user',
        method: 'POST',
        data
    });
};
export const addFavoriteUser = data => {
    return request({
        url: '/api/users/profile/addFavorite',
        method: 'POST',
        data
    });
};
export const ListFavoriteUser = data => {
    return request({
        url: '/api/users/profile/listFavorite',
        method: 'POST',
        data
    });
};
