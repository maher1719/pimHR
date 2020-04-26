import request from "./request";

export const updateUser = data => {
    return request({
        url: '/api/users/profile/update',
        method: 'POST',
        data
    });
};