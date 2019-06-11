import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import * as screenNames from "../screen_names";
import Welcome from "../../containers/WelcomeScreen";
import TabNav from "./tabNav";

const appNavigator = createStackNavigator({
  [screenNames.WELCOME]: {
    screen: Welcome
  },
  [screenNames.TAB_NAV]: {
    screen: TabNav
  }
},
{
  initialRouteName: 'welcome',
}
);

export default createAppContainer(appNavigator);
