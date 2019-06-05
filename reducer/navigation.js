import AppNavigator from './../src/app-navigator'

import { createNavigationReducer } from 'react-navigation-redux-helpers'

const NavigationReducer =  createNavigationReducer(AppNavigator)
export default NavigationReducer