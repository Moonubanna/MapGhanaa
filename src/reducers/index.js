import { combineReducers } from 'redux'

import app from './app'
import Signup from './Signup'
import Login from './Login'
import  Dashboard from './Dashboard'


export default combineReducers({
  app, Signup, Login,Dashboard,
})