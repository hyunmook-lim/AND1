import React from "react";
import styled from "styled-components";

const Container = styled.View`
  height: 60px;
  width: 280px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const SocialLoginButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.socialLogin}
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;

const SocialLoginText = styled.Text`
  color: black;
`;

function SocialLogin() {
  const buttonClickHandler = () => {
    console.log("social login button clicked!");
  };

  return (
    <Container>
      <SocialLoginButton onPress={buttonClickHandler}>
        <SocialLoginText>Naver</SocialLoginText>
      </SocialLoginButton>
      <SocialLoginButton onPress={buttonClickHandler}>
        <SocialLoginText>Kakao</SocialLoginText>
      </SocialLoginButton>
      <SocialLoginButton onPress={buttonClickHandler}>
        <SocialLoginText>Google</SocialLoginText>
      </SocialLoginButton>
    </Container>
  );
}

export default SocialLogin;
