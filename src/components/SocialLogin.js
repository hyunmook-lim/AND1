import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components";

const SocialLoginContainer = styled.View`
  height: 60px;
  width: 300px;
  flex-direction: row;
  background-color: skyblue;
  justify-content: space-evenly;
  align-items: center;
`;

const SocialLoginButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;

const SocialLoginText = styled.Text`
  color: black;
`;

function socialLogin() {
  const buttonClickHandler = () => {
    console.log("social login button clicked!");
  };

  return (
    <SocialLoginContainer>
      <SocialLoginButton onPress={buttonClickHandler}>
        <SocialLoginText>Naver</SocialLoginText>
      </SocialLoginButton>
      <SocialLoginButton onPress={buttonClickHandler}>
        <SocialLoginText>Kakao</SocialLoginText>
      </SocialLoginButton>
      <SocialLoginButton onPress={buttonClickHandler}>
        <SocialLoginText>Google</SocialLoginText>
      </SocialLoginButton>
    </SocialLoginContainer>
  );
}

export default socialLogin;
