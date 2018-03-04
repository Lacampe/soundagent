import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from '../store'

import Landing from '../components/landing'

const node = document.getElementById('landing-hook')

render(
  <Provider store={store}>
    <Landing />
  </Provider>,
  node
)
