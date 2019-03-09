import React from 'react'
import PropTypes from 'prop-types'
import createHistory from 'history/createBrowserHistory'

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import LanguageProvider from '../../containers/LanguageProvider'
import configureStore from '../../configureStore'
import { translationMessages } from '../../i18n'

const history = createHistory()
const store = configureStore({}, history)

export const SmartWrapper = ({ children }) => (
  <Provider store={store}>
    <LanguageProvider messages={translationMessages}>
      <ConnectedRouter history={history}>{children}</ConnectedRouter>
    </LanguageProvider>
  </Provider>
)
SmartWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object])
}
