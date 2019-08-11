import React from 'react'
import Parent from './components/Parent'
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <Parent/>
    </Provider>
  )
}

export default App
