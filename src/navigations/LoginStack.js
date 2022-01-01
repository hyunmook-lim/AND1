import React from "react";
import { EmailLogin, Login, Singin } from "../screens";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function LoginStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerTitleAlign: "center" }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmailLogin"
        component={EmailLogin}
        options={{ title: "이메일로 로그인" }}
      />
      <Stack.Screen
        name="Signin"
        component={Singin}
        options={{ title: "이메일로 회원가입" }}
      />
    </Stack.Navigator>
  );
}
