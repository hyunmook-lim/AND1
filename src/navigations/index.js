import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";
import { useSelector } from "react-redux";
import LoginStack from "./LoginStack";
import MainStack from "./MainStack";
import { theme } from "../data/theme";
import { Loading } from "../components";

export default function Navigation() {
  const { loginInfo, progress } = useSelector((state) => {
    return {
      loginInfo: state.loginInfo.email,
      progress: state.progress.progress,
    };
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor={theme.background} barStyle="dark-content" />
      <NavigationContainer>
        {loginInfo ? <MainStack /> : <LoginStack />}
        {progress && <Loading />}
      </NavigationContainer>
    </ThemeProvider>
  );
}

//로그인 정보 입력시 메인페이지로 이동
