import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './js/store'

import './scss/styles.scss'

import App from './js/components/App'
import Firebase, { FirebaseContext } from './js/components/firebase'

const appContainer = document.getElementById('root')

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Provider store={store}>
      <App />
    </Provider>
  </FirebaseContext.Provider>,
  appContainer
)
