import { combineReducers } from 'redux'
import RegisterUserReducer from './registeruser'
import RenderProfileReducer from './renderprofile'

const RootReducer = combineReducers({ jwt:RegisterUserReducer, profile: RenderProfileReducer })

export default RootReducer

