import request from './request';

const getMyEmplois = data => {
    return request({
        url: '/api/emploi/mine',
        method: 'POST',
        data
    });
};