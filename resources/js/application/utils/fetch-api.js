import axios from 'axios'

export const baseURL = import.meta.env.VITE_API_BASE_URL

axios.interceptors.request.use(
    (config) => {
        config.baseURL = baseURL
        return config;
    },
);
export function post(url, data, contentType = "application/json") {
    return axios({
        method: 'POST',
        url: url,
        data: data,
        headers: {
            'Content-Type': contentType
        }
    })
}
export function put(url, data, contentType = "application/json") {
    return axios({
        method: 'PUT',
        url: url,
        data: data,
        headers: {
            'Content-Type': contentType
        }
    })
}
export function get(url) {
    return axios({
        method: 'GET',
        url: url,
    })
}
export function getWithParams(url, params) {
    return axios({
        method: 'GET',
        url: url,
        params: params,
    })
}
export function del(url) {
    return axios({
        method: 'DELETE',
        url: url,
    })
}
