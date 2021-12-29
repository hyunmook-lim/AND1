import React from "react";
import styled from "styled-components/native";
import { IDPW } from "../components";
import SocialLogin from "../components/SocialLogin";
import { Text } from "react-native-web";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: blue;
  justify-content: space-around;
  align-items: center;
`;

const LogoContainer = styled.View`
  height: 200px;
  width: 200px;
  background-color: black;
`;

const Title = styled.Text`
  font-size: 50px;
  color: white;
  background-color: black;
`;

export default function Login() {
  return (
    <Container>
      <Title>AND1</Title>
      <LogoContainer />
      <IDPW title="ID" placeholder="아이디를 입력하세요" />
      <IDPW title="PW" placeholder="비밀번호를 입력하세요" />
      <SocialLogin />
    </Container>
  );
}
