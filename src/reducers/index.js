import { combineReducers } from 'redux'
import state1Reducer from './state1Reducer'
import state2Reducer from './state2Reducer'

export default combineReducers({
  state1: state1Reducer,
  state2: state2Reducer
})
