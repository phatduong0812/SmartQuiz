import axios from 'axios'
import objectAssign from 'object-assign'

import { APP_API_URL } from '../config'
import LocalStorageUtils from './LocalStorageUtils'

export const getHeaders = () => {
    return {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${LocalStorageUtils.getToken()}`,
    }
}

export const request = (endpoint, method, headers = {}, params = {}, body = {}, signal) => {
    return axios({
        url: APP_API_URL + endpoint,
        method: method,
        headers: objectAssign(getHeaders(), headers),
        params: objectAssign(params),
        data: body,
        signal: signal,
    })
}
export const get = ({ endpoint, params = {}, headers = {}, signal }) => {
    return request(endpoint, 'GET', headers, params, signal)
}

export function post({ endpoint, body = {}, params = {}, headers = {}, signal }) {
    return request(endpoint, 'POST', headers, params, body, signal)
}

export const put = ({ endpoint, body = {}, params = {}, headers = {}, signal }) => {
    return request(endpoint, 'PUT', headers, params, body, signal)
}

export const remove = ({ endpoint, body = {}, params = {}, headers = {}, signal }) => {
    return request(endpoint, 'DELETE', headers, params, body, signal)
}
