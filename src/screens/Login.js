import React from "react";
import styled from "styled-components/native";
import SocialLogin from "../components/SocialLogin";

const Container = styled.SafeAreaView`
  flex: 1;
  margin: 8px
  align-items: center;
`;

const TitleContainer = styled.View`
  position: absolute;
  left: 4%;
  right: 4%;
  top: 8%;
  bottom: 80%;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 50px;
  color: white;
  background-color: black;
  padding: 20px;
`;

const LogoContainer = styled.View`
  position: absolute;
  left: 4%;
  right: 4%;
  top: 30.99%;
  bottom: 49.89%;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.View`
  height: 200px;
  width: 200px;
  background-color: black;
`;

const EmailLoginContainer = styled.View`
  position: absolute;
  left: 4%;
  right: 4%;
  top: 61.5%;
  bottom: 22.3%;
  justify-content: center;
  align-items: center;
`;

const SocialLoginContainer = styled.View`
  position: absolute;
  left: 4%;
  right: 4%;
  top: 84.68%;
  bottom: 6.03%;
  justify-content: center;
  align-items: center;
`;

const EmailLoginButton = styled.TouchableOpacity`
  width: 220px;
  height: 50px;
  align-items: center;
  justify-content: center
  background-color: #c4c4c4;
  border-radius: 20px
`;

const EmailLoginText = styled.Text`
  font-size: 20px;
  color: black;
`;

export default function Login({ navigation }) {
  return (
    <Container>
      <TitleContainer>
        <Title>AND1</Title>
      </TitleContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <EmailLoginContainer>
        <EmailLoginButton
          onPress={() => {
            navigation.navigate("EmailLogin");
          }}
        >
          <EmailLoginText>이메일로 로그인 하기</EmailLoginText>
        </EmailLoginButton>
      </EmailLoginContainer>
      <SocialLoginContainer>
        <SocialLogin />
      </SocialLoginContainer>
    </Container>
  );
}
