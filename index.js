/**
 * @format
 */

import React from 'react'
import {
    AppRegistry
} from 'react-native'

import { Provider } from 'react-redux'
import configureStore from './src/configureStore'
import App from './src/Navigator'
import {name as appName} from './app'

const store = configureStore()

const ReduxApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
