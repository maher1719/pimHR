import request from './request';


export const createEvent=(data)=>{

console.log(data);
    return request({
        url:'/api/event/create',
        method:'Post',
        data
    })
};

export const listEvents = (data) => {
    console.log("listeEvent Data", data);

    return request({
        url: "/api/event",
        method: 'POST',
        data
    }).then(function (data) {
        return data;
    })
};

export const current = () => {
    return request({
        url: "/api/users/current",
        method: 'GET',
    }).then(function (data) {
        console.log("current user", data);
        return data;
    })
};
export const deleteOneEvent = (data) => {
    console.log("Delete Event Data", data, "");
    return request({
        url: "/api/event/delete",
        method: 'POST',
        data
    }).then(function (data) {
        console.log("current user", data);
        return data;
    })
};