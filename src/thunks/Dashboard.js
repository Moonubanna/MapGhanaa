
import {
    BASE_URL, API
} from '../constants'
import translate from '../i18n/i18n'

import {
    getCustWalletBalApiReq,
    getCustWalletBalApiSuccess,
    getCustWalletBalApiFailed,

    getRecentActApiReq,
    getRecentActApiSuccess,
    getRecentActApiFailed,

    getLatestPriceApiReq,
    getLatestPriceApiSuccess,
    getLatestPriceApiFailed

} from '../actionCreators'
import { showError } from '../NotificationService'
import axios from 'axios'
import { showErrorToast, showErrorFailToast } from '../utility/Toast'
import * as Utils from '../utility/Utils'


export const getCustWalletBalanceApi = (userData,token) => async dispatch => {

    await dispatch(getCustWalletBalApiReq(userData))
    let url = API.GET_CUST_WALLET_BALANCE;
    console.log('request data:--', url);

    return axios.get(
        url, {
        headers: {
            'content-type': 'application/json',
            'X-BANCX_PRO_TOKEN': token
        }
    }).then((res) => {
        dispatch(getCustWalletBalApiSuccess(res.data))
        return (res.data)
    })
        .catch((err) => {
            const message = "Server don't response correctly";
            dispatch(getCustWalletBalApiFailed(message))
            //showErrorFailToast(translate('MESSAGE_SERVER_ERROR'))
            Utils.logoutUser()
            return (err)
        })
}

export const getRecentActivityApi = (userData) => async dispatch => {

    await dispatch(getRecentActApiReq(userData))
    let url = API.GET_RECENT_ACTIVITIES +`StartDate=${userData.start_date}&EndDate=${userData.end_date}
    &SearchText=${userData.search_text}&TransactionStatus=${userData.transaction_status}`;
    console.log('request data:--', url);

    return axios.get(
        url, {
        headers: {
            'content-type': 'application/json',
            'X-BANCX_PRO_TOKEN': userData.token
        }
    }).then((res) => {
        dispatch(getRecentActApiSuccess(res.data))
        return (res.data)
    })
        .catch((err) => {
            const message = "Server don't response correctly";
            dispatch(getRecentActApiFailed(message))
            //showErrorFailToast(translate('MESSAGE_SERVER_ERROR'))
            Utils.logoutUser()
            return (err)
        })
}

export const getLatestPriceApi = (userData) => async dispatch => {

    await dispatch(getLatestPriceApiReq(userData))
    let url = API.GET_LATEST_PRICE_LIST;
    console.log('request data:--', url);

    return axios.get(
        url, {
        headers: {
            'content-type': 'application/json',
            'X-BANCX_PRO_TOKEN': userData.token
        }
    }).then((res) => {
        dispatch(getLatestPriceApiSuccess(res.data))
        return (res.data)
    })
        .catch((err) => {
            const message = "Server don't response correctly";
            dispatch(getLatestPriceApiFailed(message))
            //showErrorFailToast(translate('MESSAGE_SERVER_ERROR'))
            Utils.logoutUser()
            return (err)
        })
}