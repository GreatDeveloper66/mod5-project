import { combineReducers } from 'redux'
import RegisterUserReducer from './registeruser'
import RenderProfileReducer from './renderprofile'
import LogInMessageReducer from './loginmessagereducer'
import LoadCategoriesReducer from './loadcategories'

const RootReducer = combineReducers({ jwt:RegisterUserReducer, profile: RenderProfileReducer, loginmessage: LogInMessageReducer,categories: LoadCategoriesReducer })

export default RootReducer

