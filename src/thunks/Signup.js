
import {
    BASE_URL, API
} from '../constants'
import translate from '../i18n/i18n'

import {
    signUPApiReq,
    signUPApiSuccess,
    signUPApiFailed,
} from '../actionCreators'
import { showError } from '../NotificationService'
import axios from 'axios'
import { showErrorToast, showErrorFailToast } from '../utility/Toast'

const backgroundColors = [
    '#53c6a2',
    '#fdd762',
    '#9261d3',
    '#43dce7',
    '#ffcc5a',
    '#ea4398',
    '#4a5de1',
    '#e95555',
    '#7eda54',
    '#f9b647',
]
const getRandomColor = () => {
    return backgroundColors[backgroundColors.length * Math.random() | 0]
}


export const signUpIndiDuplicateEmailApi = (userData) => async dispatch => {

    //const formData = await getFormDataFromObject(userData)

    await dispatch(signUPApiReq(userData))
    let url = API.CHECK_DUPLICATE_USER_NAME + `?Email=${userData.Email}`
    console.log('request data:--', url + '\n\n' + JSON.stringify(userData));

    return axios.post(
        url, userData, {
        headers: { 'content-type': 'application/json' }
    }).then((res) => {
            dispatch(signUPApiSuccess(res.data))
            return (res.data)
        })
        .catch((err) => {
            const message = "Server don't response correctly";
            dispatch(signUPApiFailed(message))
            showErrorFailToast(translate('MESSAGE_SERVER_ERROR'))
            return (err)
        })
}

export const getFormDataFromObject = (data) => {
    const formData = new FormData();
    for (var key in data) {
        if (typeof data[key] === 'object') {
            var dataValue = data[key];
            if (key == 'images[') {
                for (var itemIndex in data[key]) {
                    var keyName = 'images[' + itemIndex + ']';
                    formData.append(keyName, data[key][itemIndex]);
                    console.log('data[key][itemIndex] Key: ', formData)
                }
            }
            else {
                if (dataValue !== null && dataValue.uri !== undefined && dataValue.uri !== null) {
                }
                else {
                    if (dataValue != null) {
                        dataValue = ((JSON.stringify(dataValue)));
                        dataValue = dataValue.replace(/\\/g, '');
                    }
                }
                if (dataValue != undefined && dataValue != null) {
                    formData.append(key, dataValue);
                }
            }
        }
        else {
            if (data[key] != undefined && data[key] != null) {
                formData.append(key, data[key]);
            }
        }
    }
    return formData;
}

