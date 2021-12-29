import LoginStack from "./LoginStack";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

export default function Navigation() {
  return (
    <NavigationContainer>
      <LoginStack />
    </NavigationContainer>
  );
}