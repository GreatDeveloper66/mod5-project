import { combineReducers } from 'redux'
import RegisterUserReducer from './registeruser'
import RenderProfileReducer from './renderprofile'
import LogInMessageReducer from './loginmessagereducer'
import LoadCategoriesReducer from './loadcategories'
import SequenceReducer from './sequencereducer'
import UserSequencesReducer from './usersequencesreducer'
import SlideReducer from './slidereducer'
import CategoryLabelReducer from './categorylabelreducer'
import SortAsanasReducer from './sortasanasreducer'


const RootReducer = combineReducers({ jwt:RegisterUserReducer, profile: RenderProfileReducer, 
									loginmessage: LogInMessageReducer,categories: LoadCategoriesReducer, 
									sequence: SequenceReducer,sequences: UserSequencesReducer, slide: SlideReducer,
									categorylabel: CategoryLabelReducer,sortasanas: SortAsanasReducer })
									
console.log(RootReducer)

export default RootReducer

