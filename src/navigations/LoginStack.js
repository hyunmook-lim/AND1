import React from "react";
import { Login } from "../screens";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function LoginStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerTitleAlign: "center" }}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
