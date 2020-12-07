import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies/MoviesContainer";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Favs from "../screens/Favs";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native-web";

// 자식 내비게이션

const Tabs = createBottomTabNavigator();
const getHeaderName = (route) =>
  route?.state?.routeNames[route.state.index] || "Movies";

export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    const name = getHeaderName(route);
    navigation.setOptions({
      title: name,
    });
  }, [route]);
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconsName = Platform.OS === "ios" ? "ios-" : "md-";
          if (route.name === "Movies") {
            iconsName += "film";
          } else if (route.name === "TV") {
            iconsName += "tv";
          } else if (route.name === "Search") {
            iconsName += "search";
          } else if (route.name === "Discovery") {
            iconsName += "heart";
          }
          return (
            <Ionicons
              name={iconsName}
              color={focused ? "white" : "grey"}
              size={26}
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "black",
          borderTopColor: "black",
        },
      }}
    >
      <Tabs.Screen name="Movies" component={Movies} />
      <Tabs.Screen name="TV" component={Tv} />
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="Discovery" component={Favs} />
    </Tabs.Navigator>
  );
};
