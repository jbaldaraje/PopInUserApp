import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import * as screenNames from "../screen_names";
import Welcome from "../../containers/WelcomeScreen";

const appNavigator = createStackNavigator({
  [screenNames.WELCOME]: {
    screen: Welcome
  }
},
{
  initialRouteName: 'welcome',
}
);

export default createAppContainer(appNavigator);
