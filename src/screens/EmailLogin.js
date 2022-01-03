import React, { useRef } from "react";
import styled from "styled-components/native";
import { LoginEmailPW } from "../components";

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

const SignupContainer = styled.View`
  position: absolute;
  top: 10px;
  right: 30px;
  justify-content: center;
  align-items: center;
`;

const SignupButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;
const SignupText = styled.Text`
  color: ${({ theme }) => theme.normalText};
  font-size: 20px;
  font-weight: bold;
`;

const IDPWContainer = styled.View`
  position: absolute;
  top: 40px;
  justify-content: center;
  align-items: center;
`;

const FindIDPWContainer = styled.View`
  position: absolute;
  top: 240px;
  flex-direction: row
  justify-content: center;
  align-items: center;
`;

const FindIDButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const FindPWButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
`;

const FindIDPWText = styled.Text`
  color: ${({ theme }) => theme.grayText};
  font-size: ${({ theme }) => theme.normalTextSize}
  margin: 10px;
`;

export default function EmailLogin({ navigation }) {
  function _SignupButton() {
    navigation.navigate("Signup");
    console.log(`Email login page: move to sign in page`);
  }
  return (
    <Container>
      <SignupContainer>
        <SignupButton onPress={_SignupButton}>
          <SignupText>회원가입하기</SignupText>
        </SignupButton>
      </SignupContainer>
      <IDPWContainer>
        <LoginEmailPW />
      </IDPWContainer>
      <FindIDPWContainer>
        <FindIDButton>
          <FindIDPWText>아이디 찾기</FindIDPWText>
        </FindIDButton>
        <FindPWButton>
          <FindIDPWText>패스워드 찾기</FindIDPWText>
        </FindPWButton>
      </FindIDPWContainer>
    </Container>
  );
}
