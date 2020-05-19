import { combineReducers } from 'redux'
import RegisterUserReducer from './registeruser'
import RenderProfileReducer from './renderprofile'
import LogInMessageReducer from './loginmessagereducer'
import LoadCategoriesReducer from './loadcategories'
import SequenceReducer from './sequencereducer'

const RootReducer = combineReducers({ jwt:RegisterUserReducer, profile: RenderProfileReducer, loginmessage: LogInMessageReducer,categories: LoadCategoriesReducer, sequence: SequenceReducer })

export default RootReducer

