import { combineReducers } from 'redux'
import RegisterUserReducer from './registeruser'
import RenderProfileReducer from './renderprofile'

const RootReducer = combineReducers({ userObj:RegisterUserReducer, profile: RenderProfileReducer })

export default RootReducer

