import { Dimensions,Platform } from 'react-native'

export const BASE_URL = 'https://bancxapi.azurewebsites.net/api/';

export const API = {

    //common
    VERIFY_2_FA: BASE_URL + 'Login/Verify2FA',
    //signup
    CHECK_DUPLICATE_USER_NAME: BASE_URL + 'Customers/CheckDuplicateUserName',
    CHECK_DUPLICATE_MOBILE_NUMBER: BASE_URL + 'Customers/CheckDuplicateMobile',
    GET_COUNTRY: BASE_URL + 'Country/Get',
    GET_STATE: BASE_URL + 'States/GetStateByCountry/',
    GET_CITY: BASE_URL + 'Cities/GetCitiesByState/',
    SAVE_INDIVUDAL_USER: BASE_URL + 'Customers/SaveUser',
    //login
    LOGIN_USER: BASE_URL + 'Login/UserLogin',
    CHECK_USER_DOCUMENT: BASE_URL + 'UserDocuments/CheckUserDocument?DocID=',
    //dashboard
    GET_CUST_WALLET_BALANCE: BASE_URL + 'CustomerTransactions/GetCustomerWalletBalance',
    GET_LATEST_PRICE_LIST: BASE_URL + 'CryptoCurrencyPrice/GetLatestPriceList',
    GET_RECENT_ACTIVITIES: BASE_URL + 'CustomerActivities/GetRecentActivities?',
}

export const APP_PARAMS = {
    


    ROLE: "role",
    SUPER_ADMIN: 'superAdmin',

    LAT: 'lat',
    LNG: 'lng',
    COUNTRY_LONG_NAME: 'COUNTRY_LONG_NAME',
    COUNTRY_SHORT_NAME: 'COUNTRY_SHORT_NAME',
    STATE_LONG_NAME: 'STATE_LONG_NAME',
    STATE_SHORT_NAME: 'STATE_SHORT_NAME',
    CITY_LONG_NAME: 'CITY_LONG_NAME',
    CITY_SHORT_NAME: 'CITY_SHORT_NAME',
    POSTAL_CODE: 'postCode',
    FORMATED_ADDRESS: 'FORMATED_ADDRESS',
    //SIGN Up
    FULL_NAME: 'fullName',
    PHONE: 'phone',
    ALTER_NATE_PHONE: 'alterNatePhoneNumber',
    EMAIL: 'email',
    PASSWORD: 'password',
    PHONE_CODE: 'phonecode',
    COUNTRY_ID: 'countryId',
    STATE_ID: 'stateId',
    CITY_ID: 'cityId',
    //HOME
    USER_ID: "userId",
    REQ_ID: "requestId",
    SUCCESS: 'success',
    MESSAGE: 'message',
    DATA: 'data',
    ERROR: 'error',
    CUSTOMER_ID: 'customerId',
    OTP: 'otp',

    CAT_ID: 'categoryId',
    START: "start",
    END: "end",
    id: "uid",
    _id: "id",
    CAT_RELEATED_PRODUCT: 'categoryRelatedProductList',
    SUB_CAT: 'subCategories',
    TOTAL_PRODUCT_SIZE: 'totalProductSize',
    CAT_U_ID: 'categoryUuid',
    PRODUCT_ID: 'productId',
    RELATED_PRODUCT_LIST: 'relatedProductList',
    PRODUCTS: 'products',
    COMNT_REVIEW_LIST: 'commentReviewsList',
    IMG_LOC: 'imageLocations',
    IMG_LOC_LIST: 'imageLocationsList',
    NAME: 'name',
    TOTAL_REVIEW: "totalReviews",
    TOTAL_RATING: "totalRating",
    DISCOUNT_PRICE: "discountPrice",
    PRICE: "price",
    DISCOUNT: 'discount',
    OFF: 'off',
    U_UID: 'uuid',
    WISH: "wish",
    CART: "cart",

    OFF_TYPE: 'offerType',
    PRODUCT_LIST: 'productList',
    OFF_IN_PER: 'offInPercentage',
    RES_PKT: "responsePacket",
    APARTMENT_SUIT: 'apartmentSuit',
    STREET_ADDRESS: 'streetAddress',
    LANDMARK: 'landMark',
    CITY: 'city',
    STATE: 'state',
    ADDRESS_TYPE: 'addressType',
    HOME: 'home',
    WORK: 'work',
    FIRST_NAME: 'firstName',
    ADDRESS_ID: 'addressId',
    SORT_LIST: 'sortList',
    FILTER_TYPE: 'filterType'


}
export const KEY = {
     //BancX use
     PARAMS_NAME:'Name',
     PARAMS_IMAGE:'ProfileImage',
    USER_DATA: 'userdata',
    NAME: 'name',
    AS_GUESt_USER: 'AS_GUESt_USER',
    NEWS_SELECTED_DATA: 'news_selected_data',
    SUCCESS_: 'Success',
    FAILED_: 'Failed'
}

export const LOCALES = {
    ENGLISH: { id: 1, name: "en", label: "ENGLISH" },
    HINDI: { id: 2, name: "hi", label: "हिंदी" }
};

export const FONT_FAMILIY = {
    Font_Black: Platform.OS == 'android' ? 'OpenSans-Bold': 'OpenSans-Bold',
    Font_Bold_Fully: Platform.OS == 'android' ? 'OpenSans-Bold' : 'OpenSans-Bold',
    Font_Bold: Platform.OS == 'android' ? 'OpenSans-SemiBold' : 'OpenSans-SemiBold',
    Font_Light: Platform.OS == 'android' ? 'OpenSans-Light' : 'OpenSans-Light',
    Font_Medium: Platform.OS == 'android' ? 'OpenSans-SemiBold' : 'OpenSans-SemiBold',
    Font_Regular: Platform.OS == 'android' ? 'OpenSans-Regular' : 'OpenSans-Regular',
    Ittalian: 'OpenSans-Italic',
}

export const DIMENS = {
    px_0: 0,
    px_05: 0.5,
    px_1: 1,
    px_2: 2,
    px_3: 3,
    px_5: 5,
    px_8: 8,
    px_10: 10,
    px_12: 12,
    px_300: 300,
    px_14: 14,
    px_15: 15,
    px_15: 16,
    px_18: 18,
    px_20: 20,
    px_22: 22,
    px_23: 23,
    px_25: 25,
    px_28: 28,
    px_30: 30,
    px_32: 32,
    px_35: 35,
    px_40: 40,
    px_45: 45,
    px_50: 50,
    px_60: 60,
    px_70: 70,
    px_75: 75,
    px_80: 80,
    px_90: 90,
    px_100: 100,
    px_120: 120,
    px_130: 130,
    px_140: 140,
    px_150: 150,
    px_180: 180,

    px_200: 200,
    px_220: 220,
    px_230: 230,
    px_250: 250,

    btn_font_size: 16,
    btn_h: 40,
    devider_h: 1,
    devider_h_half: 0.5,
    devider_h_1: 1,
    txt_size_small_small: 10,
    txt_size_small: 11,
    txt_size_small_12: 12,
    txt_size_min_small: 8,
    txt_size_min_small_9: 9,
    txt_size_medium: 13,
    txt_size_medium_14: 14,
    txt_size_medium_1: 15,
    txt_size_large: 16,
    txt_size_large_extra: 18,
    txt_size_large_extra_20: 20,
    txt_size_large_extra_26: 26,
    txt_size_large_extra_30: 30,
    txt_size_large_extra_40: 40,
    row_h: 50,
    minHeight: 50,
    row_img_w: 60,
    row_img_big: 70,
    row_img_w_2: 50,
    tab_width: 24,

    //Category Size
    cat_img_width: 55,
    cat_img_height: 55,
    cat_img_radius: 27.5
}


export const CURRENCY = {
    RUPEES: '\u20B9',
    DOLLER: '\u0024',
    EURO: '\u20AC',
    JAPANES_YEN: '\u00A5',
    POUND_STERLING: '\u00A3'
}
export const SCREEN = {
    INTRO_SCREEN: 'IntroScreen',
    LOGIN: 'Login',
    SIGNUPTYPE: 'SignupType',
    SIGNUP: 'Signup',
    SIGNUP_BUSINESS: 'SignupBusiness',
    SIGNUP_ADDRESS: 'SignupAddress',
    SIGNUP_BUSINESS_ADDRESS: 'SignupBusinessAddress',
    TWO_FACTOR_AUTH: 'TwoFactorAuthentication',
    TWO_FACTOR_AUTH_LOGIN: 'TwoFactorAuthLogin',
    KYC_VERIFICATION: 'KYCVerfication',
    DASHBOARD: 'Dashboard',
    ADD_CARD_BANK_ACCOUNT: 'AddCardBankAccount',
    ADD_BANK_ACCOUNT: 'AddBankAccount',
    ADD_CARD: 'AddACard',
    TRADE: 'Trade',
    SEND_REQUEST_EXCHANGE: 'SendRequestExchange',
    CONTACT_INFO: 'ContactInfo',
    ACTIVITY_BACK: 'ActivityBack',
}

//Usefull BancX
export const MAX_LENGTH_OF_PHONE_NUMBER = 12;
export const MIN_LENGTH_OF_PHONE_NUMBER = 10;
export const KEY_MINIMUMLENGTHOFNAME = 3;
export const KEY_MAXLENGTHOFNAME = 20;
export const KEY_MAXLENGTHOFPASSWORD = 20;
export const KEY_MINIMUMLENGTHOFPASSWORD = 6;
export const DATE_FORMAT_SHOW = 'DD MMM YYYY';
export const DATE_FORMAT_SEND = 'YYYY-MM-DD';

//HEIGHT AND WIDTH
export const WIDTH = Dimensions.get('screen').width
export const HEIGHT = Dimensions.get('screen').height

//API FOR BancX
//register
export const APP_SIGNUP_SUCESS = 'APP_SIGNUP_SUCESS'
export const APP_SIGNUP_FAIL = 'APP_SIGNUP_FAIL'
export const APP_SIGNUP_REQUEST = 'APP_SIGNUP_REQUEST'

export const APP_SIGNUP_INDI_COUNTRY_SUCESS = 'APP_SIGNUP_INDI_COUNTRY_SUCESS'
export const APP_SIGNUP_INDI_COUNTRY_FAIL = 'APP_SIGNUP_INDI_COUNTRY_FAIL'
export const APP_SIGNUP_INDI_COUNTRY_REQUEST = 'APP_SIGNUP_INDI_COUNTRY_REQUEST'

export const APP_SIGNUP_INDI_STATE_SUCESS = 'APP_SIGNUP_INDI_STATE_SUCESS'
export const APP_SIGNUP_INDI_STATE_FAIL = 'APP_SIGNUP_INDI_STATE_FAIL'
export const APP_SIGNUP_INDI_STATE_REQUEST = 'APP_SIGNUP_INDI_STATE_REQUEST'

export const APP_SIGNUP_INDI_CITY_SUCESS = 'APP_SIGNUP_INDI_CITY_SUCESS'
export const APP_SIGNUP_INDI_CITY_FAIL = 'APP_SIGNUP_INDI_CITY_FAIL'
export const APP_SIGNUP_INDI_CITY_REQUEST = 'APP_SIGNUP_INDI_CITY_REQUEST'

export const APP_SIGNUP_INDI_MOBILE_CHECK_SUCESS = 'APP_SIGNUP_INDI_MOBILE_CHECK_SUCESS'
export const APP_SIGNUP_INDI_MOBILE_CHECK_FAIL = 'APP_SIGNUP_INDI_MOBILE_CHECK_FAIL'
export const APP_SIGNUP_INDI_MOBILE_CHECK_REQUEST = 'APP_SIGNUP_INDI_MOBILE_CHECK_REQUEST'

export const APP_SIGNUP_INDI_REGISTER_SUCESS = 'APP_SIGNUP_INDI_REGISTER_SUCESS'
export const APP_SIGNUP_INDI_REGISTER_FAIL = 'APP_SIGNUP_INDI_REGISTER_FAIL'
export const APP_SIGNUP_INDI_REGISTER_REQUEST = 'APP_SIGNUP_INDI_REGISTER_REQUEST'

//login
export const APP_LOGIN_SUCESS = 'APP_LOGIN_SUCESS'
export const APP_LOGIN_FAIL = 'APP_LOGIN_FAIL'
export const APP_LOGIN_REQUEST = 'APP_LOGIN_REQUEST'

export const APP_START_2_FA_SUCESS = 'APP_START_2_FA_SUCESS'
export const APP_START_2_FA_FAIL = 'APP_START_2_FA_FAIL'
export const APP_START_2_FA_REQUEST = 'APP_START_2_FA_REQUEST'

export const APP_VERIFY_2_FA_SUCESS = 'APP_VERIFY_2_FA_SUCESS'
export const APP_VERIFY_2_FA_FAIL = 'APP_VERIFY_2_FA_FAIL'
export const APP_VERIFY_2_FA_REQUEST = 'APP_VERIFY_2_FA_REQUEST'

export const APP_CHECK_USER_DOC_SUCESS = 'APP_CHECK_USER_DOC_SUCESS'
export const APP_CHECK_USER_DOC_FAIL = 'APP_CHECK_USER_DOC_FAIL'
export const APP_CHECK_USER_DOC_REQUEST = 'APP_CHECK_USER_DOC_REQUEST'

export const APP_GET_USER_DOC_SUCESS = 'APP_GET_USER_DOC_SUCESS'
export const APP_GET_USER_DOC_FAIL = 'APP_GET_USER_DOC_FAIL'
export const APP_GET_USER_DOC_REQUEST = 'APP_GET_USER_DOC_REQUEST'

export const APP_GET_KYC_DOC_SUCESS = 'APP_GET_KYC_DOC_SUCESS'
export const APP_GET_KYC_DOC_FAIL = 'APP_GET_KYC_DOC_FAIL'
export const APP_GET_KYC_DOC_REQUEST = 'APP_GET_KYC_DOC_REQUEST'

export const APP_SAVE_KYC_DOC_SUCESS = 'APP_SAVE_KYC_DOC_SUCESS'
export const APP_SAVE_KYC_DOC_FAIL = 'APP_SAVE_KYC_DOC_FAIL'
export const APP_SAVE_KYC_DOC_REQUEST = 'APP_SAVE_KYC_DOC_REQUEST'

//dashboard
export const APP_GET_CUST_WALLET_BAL_SUCESS = 'APP_GET_CUST_WALLET_BAL_SUCESS'
export const APP_GET_CUST_WALLET_BAL_FAIL = 'APP_GET_CUST_WALLET_BAL_FAIL'
export const APP_GET_CUST_WALLET_BAL_REQUEST = 'APP_GET_CUST_WALLET_BAL_REQUEST'

export const APP_GET_RECENT_ACTIVITY_SUCESS = 'APP_GET_RECENT_ACTIVITY_SUCESS'
export const APP_GET_RECENT_ACTIVITY_FAIL = 'APP_GET_RECENT_ACTIVITY_FAIL'
export const APP_GET_RECENT_ACTIVITY_REQUEST = 'APP_GET_RECENT_ACTIVITY_REQUEST'

export const APP_GET_LATEST_PRICE_SUCESS = 'APP_GET_LATEST_PRICE_SUCESS'
export const APP_GET_LATEST_PRICE_FAIL = 'APP_GET_LATEST_PRICE_FAIL'
export const APP_GET_LATEST_PRICE_REQUEST = 'APP_GET_LATEST_PRICE_REQUEST'

//profile
export const APP_GET_PROFILE_SUCESS = 'APP_GET_PROFILE_SUCESS'
export const APP_GET_PROFILE_FAIL = 'APP_GET_PROFILE_FAIL'
export const APP_GET_PROFILE_REQUEST = 'APP_GET_PROFILE_REQUEST'

export const APP_GET_PAYMENT_QR_CODE_SUCESS = 'APP_GET_PAYMENT_QR_CODE_SUCESS'
export const APP_GET_PAYMENT_QR_CODE_FAIL = 'APP_GET_PAYMENT_QR_CODE_FAIL'
export const APP_GET_PAYMENT_QR_CODE_REQUEST = 'APP_GET_PAYMENT_QR_CODE_REQUEST'

export const APP_UPDATE_PROFILE_PIC_SUCESS = 'APP_UPDATE_PROFILE_PIC_SUCESS'
export const APP_UPDATE_PROFILE_PIC_FAIL = 'APP_UPDATE_PROFILE_PIC_FAIL'
export const APP_UPDATE_PROFILE_PIC_REQUEST = 'APP_UPDATE_PROFILE_PIC_REQUEST'

//Add Bank Account
export const APP_GET_BANK_DETAIL_SUCESS = 'APP_GET_BANK_DETAIL_SUCESS'
export const APP_GET_BANK_DETAIL_FAIL = 'APP_GET_BANK_DETAIL_FAIL'
export const APP_GET_BANK_DETAIL_REQUEST = 'APP_GET_BANK_DETAIL_REQUEST'

export const APP_ADD_BANK_DETAIL_SUCESS = 'APP_ADD_BANK_DETAIL_SUCESS'
export const APP_ADD_BANK_DETAIL_FAIL = 'APP_ADD_BANK_DETAIL_FAIL'
export const APP_ADD_BANK_DETAIL_REQUEST = 'APP_ADD_BANK_DETAIL_REQUEST'

export const APP_UPDATE_BANK_DETAIL_SUCESS = 'APP_UPDATE_BANK_DETAIL_SUCESS'
export const APP_UPDATE_BANK_DETAIL_FAIL = 'APP_UPDATE_BANK_DETAIL_FAIL'
export const APP_UPDATE_BANK_DETAIL_REQUEST = 'APP_UPDATE_BANK_DETAIL_REQUEST'

//send Request child tab
export const APP_SEARCH_CUSTOMER_SUCESS = 'APP_SEARCH_CUSTOMER_SUCESS'
export const APP_SEARCH_CUSTOMER_FAIL = 'APP_SEARCH_CUSTOMER_FAIL'
export const APP_SEARCH_CUSTOMER_REQUEST = 'APP_SEARCH_CUSTOMER_REQUEST'

export const APP_FIAT_TO_FIAT_CONVERSION_SUCESS = 'APP_FIAT_TO_FIAT_CONVERSION_SUCESS'
export const APP_FIAT_TO_FIAT_CONVERSION_FAIL = 'APP_FIAT_TO_FIAT_CONVERSION_FAIL'
export const APP_FIAT_TO_FIAT_CONVERSION_REQUEST = 'APP_FIAT_TO_FIAT_CONVERSION_REQUEST'

export const APP_GET_FEES_SEND_TRANSACTION_SUCESS = 'APP_GET_FEES_SEND_TRANSACTION_SUCESS'
export const APP_GET_FEES_SEND_TRANSACTION_FAIL = 'APP_GET_FEES_SEND_TRANSACTION_FAIL'
export const APP_GET_FEES_SEND_TRANSACTION_REQUEST = 'APP_GET_FEES_SEND_TRANSACTION_REQUEST'

export const APP_SEND_RECEIVE_REQUEST_SUCESS = 'APP_SEND_RECEIVE_REQUEST_SUCESS'
export const APP_SEND_RECEIVE_REQUEST_FAIL = 'APP_SEND_RECEIVE_REQUEST_FAIL'
export const APP_SEND_RECEIVE_REQUEST_REQUEST = 'APP_SEND_RECEIVE_REQUEST_REQUEST'

export const APP_GET_CONTACTS_SUCESS = 'APP_GET_CONTACTS_SUCESS'
export const APP_GET_CONTACTS_FAIL = 'APP_GET_CONTACTS_FAIL'
export const APP_GET_CONTACTS_REQUEST = 'APP_GET_CONTACTS_REQUEST'

export const APP_GET_CUSTOMER_ACTIVITY_SUCESS = 'APP_GET_CUSTOMER_ACTIVITY_SUCESS'
export const APP_GET_CUSTOMER_ACTIVITY_FAIL = 'APP_GET_CUSTOMER_ACTIVITY_FAIL'
export const APP_GET_CUSTOMER_ACTIVITY_REQUEST = 'APP_GET_CUSTOMER_ACTIVITY_REQUEST'


export const APP_LOGOUT_REQUEST = 'APP_LOGOUT_REQUEST'









// Internet connection state
export const APP_START = 'APP_START'
export const APP_START_SUCCESS = 'APP_START_SUCCESS'
export const APP_START_FAIL = 'APP_START_FAIL'
export const CONNECTION_STATE_CHANGE = 'CONNECTION_STATE_CHANGE'
// User authentication
export const AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST'
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS'
export const AUTH_LOGIN_FAIL = 'AUTH_LOGIN_FAIL'
export const AUTH_LOGOUT_REQUEST = 'AUTH_LOGOUT_REQUEST'
export const AUTH_LOGOUT_SUCCESS = 'AUTH_LOGOUT_SUCCESS'
export const AUTH_LOGOUT_FAIL = 'AUTH_LOGOUT_FAIL'
export const AUTH_GET_SESSION_REQUEST = 'AUTH_GET_SESSION_REQUEST'
export const AUTH_GET_SESSION_SUCCESS = 'AUTH_GET_SESSION_SUCCESS'
export const AUTH_GET_SESSION_FAIL = 'AUTH_GET_SESSION_FAIL'
export const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
export const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
export const passRegex = /^.*(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$#%])(^[a-zA-Z0-9@$#%]+$)/
////?-i)(?=^.{8,}$)((?!.*\s)(?=.*[A-Z])(?=.*[a-z]))((?=(.*\d){1,})|(?=(.*\W){1,}))^.*$/



