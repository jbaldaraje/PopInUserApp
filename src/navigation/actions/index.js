import { NavigationActions } from "react-navigation";
import * as screenNames from "../screen_names";

export const navigateBack = () => NavigationActions.back();

export const navigateToWelcome = () =>
  NavigationActions.navigate({
    routeName: screenNames.WELCOME
  });
