import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import rootReducer from './reducers'

const initialState = {}

const store = createStore(
  rootReducer,
  initialState,
  devToolsEnhancer()
)

export default store
