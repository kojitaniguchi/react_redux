
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas.jsx'
// Container
import AppContainer from './containers/AppContainer.jsx'

// reducers
import Reducers from './reducers/AppReducer.jsx'

// // InitialState
// const initialState = {
//   value: null,
// }

// sagamiddleware
const sagamiddleware = createSagaMiddleware()

// InitialStore
const store = createStore(
  Reducer,
  applyMiddleware(
    sagamiddleware, logger()
  )
)
sagaMiddleware.run(rootSaga)

// InitialDOM
const content = document.querySelector('.content')

// Rendering
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  content
)
