import React from "react";
import styled from "styled-components/native";
import SocialLogin from "../components/SocialLogin";
import { useSelector, useDispatch } from "react-redux";
import { LoginAction } from "../actions/LoginAction";

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

const TestLoginContainer = styled.View`
  justify-content: center;
  align-items: center;
  position: absolute
  top: 14%;
  bottom: 70%
  right: 10%;
  left: 10%
`;

const TestLogin = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.button}
  justify-content: center;
  align-items:center
  width: 150px;
  height: 50px;
  border-radius: 15px
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
  color: ${({ theme }) => theme.normalText};
  font-weight: bold;
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
  border: solid 1px;
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
  background-color: ${({ theme }) => theme.button}
  border-radius: 20px
`;

const EmailLoginText = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.normalText};
`;

export default function Login({ navigation }) {
  const dispatch = useDispatch();
  const { testLogin } = useSelector((state) => {
    return { testLogin: state.loginInfo.testLogin };
  });

  function _EmailLoginButton() {
    navigation.navigate("EmailLogin");
    console.log("Login page: move to email login page");
  }

  return (
    <Container>
      <TitleContainer>
        <Title>AND1</Title>
      </TitleContainer>
      <TestLoginContainer>
        <TestLogin
          onPress={() => {
            dispatch(LoginAction(true));
            console.log("Login page: Login");
          }}
        >
          <Title style={{ fontSize: 20 }}>Test Login</Title>
        </TestLogin>
      </TestLoginContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <EmailLoginContainer>
        <EmailLoginButton onPress={_EmailLoginButton}>
          <EmailLoginText>이메일로 로그인 하기</EmailLoginText>
        </EmailLoginButton>
      </EmailLoginContainer>
      <SocialLoginContainer>
        <SocialLogin />
      </SocialLoginContainer>
    </Container>
  );
}
