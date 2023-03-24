import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StyleSheet, Text, View } from "react-native";

import HomePage from "./src/pages/Home/HomePage";
import Details from "./src/screens/DetailsPage/Details";
import VideosDetails from "./src/screens/DetailsPage/VideosDetails";
import MusicScreen from "./src/screens/MusicScreen/MusicScreen";
import VideoScreen from "./src/screens/VideoScreen/VideoScreen";

const Stack = createNativeStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};
const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="VideoDetails" component={VideosDetails} />
        <Stack.Screen name="Music" component={MusicScreen} />
        <Stack.Screen name="Video" component={VideoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
