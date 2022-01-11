import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";
import { useSelector } from "react-redux";
import LoginStack from "./LoginStack";
import MainTab from "./MainTab";
import { color } from "../data/color";

export default function Navigation() {
  const { loginInfo } = useSelector((state) => {
    return { loginInfo: state.loginInfo.email };
  });

  return (
    <ThemeProvider theme={color}>
      <StatusBar backgroundColor={color.background} barStyle="dark-content" />
      <NavigationContainer>
        {loginInfo ? <MainTab /> : <LoginStack />}
      </NavigationContainer>
    </ThemeProvider>
  );
}

//로그인 정보 입력시 메인페이지로 이동
