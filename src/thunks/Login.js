
import {
    BASE_URL, API
} from '../constants'
import translate from '../i18n/i18n'

import {
    loginApiReq,
    loginApiSuccess,
    loginApiFailed,

    checkDocumentApiReq,
    checkDocumentApiSuccess,
    checkDocumentApiFailed
} from '../actionCreators'
import { showError } from '../NotificationService'
import axios from 'axios'
import { showErrorToast, showErrorFailToast } from '../utility/Toast'


export const loginIndiBusinessUserApi = (userData) => async dispatch => {

    await dispatch(loginApiReq(userData))
    let url = API.LOGIN_USER
    console.log('request data:--', url + '\n\n' + JSON.stringify(userData));

    return axios.post(
        url, userData, {
        headers: { 'content-type': 'application/json' }
    }).then((res) => {
            dispatch(loginApiSuccess(res.data))
            return (res.data)
        })
        .catch((err) => {
            const message = "Server don't response correctly";
            dispatch(loginApiFailed(message))
            showErrorFailToast(translate('MESSAGE_SERVER_ERROR'))
            return (err)
        })
}

export const checkDocumentUserApi = (userData,token) => async dispatch => {

    await dispatch(checkDocumentApiReq(userData))
    let url = API.CHECK_USER_DOCUMENT
    console.log('request data:--', url + '\n\n' + JSON.stringify(userData));

    return axios.get(
        url, {
        headers: {
            'content-type': 'application/json',
            'X-BANCX_PRO_TOKEN': token
        }
    }).then((res) => {
            dispatch(checkDocumentApiSuccess(res.data))
            return (res.data)
        })
        .catch((err) => {
            const message = "Server don't response correctly";
            dispatch(checkDocumentApiFailed(message))
            showErrorFailToast(translate('MESSAGE_SERVER_ERROR'))
            return (err)
        })
}

