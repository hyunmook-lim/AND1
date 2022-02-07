import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainTab from "./MainTab";
import { AddFriend, FriendSetting } from "../screens";

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="MainTab"
      screenOptions={{ headerTitleAlign: "center" }}
    >
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddFriend"
        component={AddFriend}
        options={{ title: "친구 추가" }}
      />
      <Stack.Screen
        name="FriendSetting"
        component={FriendSetting}
        options={{ title: "친구 관리" }}
      />
    </Stack.Navigator>
  );
}
