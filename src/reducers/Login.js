import {

  APP_LOGIN_REQUEST,
  APP_LOGIN_SUCESS,
  APP_LOGIN_FAIL,

  APP_CHECK_USER_DOC_SUCESS,
  APP_CHECK_USER_DOC_FAIL,
  APP_CHECK_USER_DOC_REQUEST

} from '../constants'

const initialState = {
  error: undefined,
  loading: false,
  data: undefined
}

export default (state = initialState, action) => {

  switch (action.type) {
    case APP_LOGIN_REQUEST:
      return { ...state, error: undefined, loading: true }

    case APP_LOGIN_FAIL:
      return { ...state, error: action.error, loading: false }

    case APP_LOGIN_SUCESS:
      return {
        ...state,
        loading: false,
        data: { ...action.payload }
      }

    case APP_CHECK_USER_DOC_REQUEST:
      return { ...state, error: undefined, loading: true }

    case APP_CHECK_USER_DOC_FAIL:
      return { ...state, error: action.error, loading: false }

    case APP_CHECK_USER_DOC_SUCESS:
      return {
        ...state,
        loading: false,
        data: { ...action.payload }
      }

    default: return state
  }
}