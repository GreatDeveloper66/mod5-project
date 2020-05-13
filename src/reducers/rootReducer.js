import { combineReducers } from 'redux'
import FormSwitchReducer from './formswitch'
import RegisterUserReducer from './registeruser'
import RenderProfileReducer from './renderprofile'

const RootReducer = combineReducers({ formStatus: FormSwitchReducer, userObj:RegisterUserReducer, profile: RenderProfileReducer })

export default RootReducer

// import { combineReducers } from 'redux'
// import todos from './todos'
// import counter from './counter'
//
// export default combineReducers({
//   todos,
//   counter
// })
