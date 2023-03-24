import { useIsFocused } from "@react-navigation/core";
import { StatusBar } from "react-native";
const MainStatusBar = (props) => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default MainStatusBar;
