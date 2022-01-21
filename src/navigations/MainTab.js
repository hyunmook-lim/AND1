import React from "react";
import { StatusBar } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FriendList, MakingGroup, TeamSearch, Setting } from "../screens";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../data/theme";

const Tab = createBottomTabNavigator();

function TabIcon_MaterialCommunityIcons({ name, color }) {
  return <MaterialCommunityIcons name={name} size={35} color={color} />;
}

export default function MainTab() {
  return (
    <Tab.Navigator
      initialRouteName="FriendList"
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: theme.tabBarInactive,
        tabBarActiveTintColor: theme.tabBarActive,
        tabBarStyle: {
          height: 70,
          paddingBottom: 6,
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tab.Screen
        name="FriendList"
        component={FriendList}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: (icon) =>
            TabIcon_MaterialCommunityIcons({
              ...icon,
              name: "account",
            }),
        }}
      />
      <Tab.Screen
        name="MakingGroup"
        component={MakingGroup}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: (icon) =>
            TabIcon_MaterialCommunityIcons({
              ...icon,
              name: "account-plus",
            }),
        }}
      />
      <Tab.Screen
        name="TeamSearch"
        component={TeamSearch}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: (icon) =>
            TabIcon_MaterialCommunityIcons({
              ...icon,
              name: "magnify",
            }),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: (icon) =>
            TabIcon_MaterialCommunityIcons({
              ...icon,
              name: "cog-outline",
            }),
        }}
      />
    </Tab.Navigator>
  );
}
