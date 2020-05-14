import { combineReducers } from 'redux'
import RegisterUserReducer from './registeruser'
import RenderProfileReducer from './renderprofile'
import LogInMessageReducer from './loginmessagereducer'

const RootReducer = combineReducers({ jwt:RegisterUserReducer, profile: RenderProfileReducer, loginmessage: LogInMessageReducer })

export default RootReducer

