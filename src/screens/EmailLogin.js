import React, { useRef } from "react";
import styled from "styled-components/native";
import { EmailPW } from "../components";

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

const SigninContainer = styled.View`
  position: absolute;
  top: 10px;
  right: 30px;
  justify-content: center;
  align-items: center;
`;

const SigninButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;
const SigninText = styled.Text`
  color: ${({ theme }) => theme.normalText};
  font-size: 20px;
  font-weight: bold;
`;

const IDPWContainer = styled.View`
  position: absolute;
  top: 100px;
  justify-content: center;
  align-items: center;
`;

const FindIDPWContainer = styled.View`
  position: absolute;
  top: 220px;
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
  font-size: 20px;
  margin: 10px;
`;

export default function EmailLogin({ navigation }) {
  function _SigninButton() {
    navigation.navigate("Signin");
    console.log(`Email login page: move to sign in page`);
  }
  return (
    <Container>
      <SigninContainer>
        <SigninButton onPress={_SigninButton}>
          <SigninText>회원가입하기</SigninText>
        </SigninButton>
      </SigninContainer>
      <IDPWContainer>
        <EmailPW />
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
