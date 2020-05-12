import { combineReducers } from 'redux'
import FormSwitchReducer from './formswitch'
import UserRegistrationReducer from './userRegistration'

const RootReducer = combineReducers(UserRegistrationReducer, FormSwitchReducer)

export default RootReducer
