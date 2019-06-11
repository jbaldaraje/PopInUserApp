import { NavigationActions } from "react-navigation";
import * as screenNames from "../screen_names";

export const navigateBack = () => NavigationActions.back();

export const navigateToTab = () =>
  NavigationActions.navigate({
    routeName: screenNames.TAB_NAV
  });
