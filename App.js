import React from 'react'

import { Provider } from 'react-redux'
import store from './redux/store'

import MainContainer from './components/main-container'

// TODO: Split my code
// TODO: Work on the style sheet
// TODO: Add d3 for the chart

const App = () =>
  <Provider store={ store }>
    <MainContainer />
  </Provider>

export default App