import { combineReducers } from "redux";
import ApplicationNavigator from ".././navigation/navigators";
import { createNavigationReducer } from 'react-navigation-redux-helpers';

export default combineReducers({
  nav: createNavigationReducer(ApplicationNavigator),
});
