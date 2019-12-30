import http from "./api.js";

export function apiUserLogin (data) {
    return http({
        method: "POST",
        url: "/api/login",
        data
    })
}

export function apiGetList (params) {
    return http({
        url: "/api/userInfo",
        params
    })
}