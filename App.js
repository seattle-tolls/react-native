import React from 'react'

import { Provider } from 'react-redux'
import store from './redux/store'

import MainContainer from './components/main-container'

const App = () =>
  <Provider store={ store }>
    <MainContainer />
  </Provider>

export default App