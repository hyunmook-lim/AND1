import React, { useEffect, useRef, useState } from "react";
import { Alert, Dimensions } from "react-native";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";
import { login, readLoginInfo } from "../data/firebase";
import { LoginAction } from "../actions/LoginAction";
import { ProgressAction } from "../actions/ProgressAction";

const width = Dimensions.get("window").width;

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

const MiddleContainer = styled.View`
  width: ${width}px
  justify-content: center;
  align-items: center;
  border-radius: 10px
  margin: 3px;
`;

const TextArea = styled.View`
  justify-content: center;
  align-items: center;
  width: 80%
  height: 50px;
  padding-left: 10px
`;

const Text = styled.Text`
  align-self: flex-start
  font-size: ${({ theme }) => theme.normalTextSize}
  color: ${({ theme }) => theme.grayText};
`;

const InputArea = styled.View`
  width: 80%;
  height: 50px;
  background-color: ${({ theme }) => theme.emailPWInput};
  opacity: 0.7
  align-items: flex-start;
  justify-content: center;
  border-radius: 12px
`;

const Input = styled.TextInput`
  color: black;
  font-size: 15px;
  height: 50px;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
`;

const FindIDPWContainer = styled.View`
  position: absolute;
  top: 235px;
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

const LoginButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: ${width}px;
  top: 330px;
`;

const LoginButtonText = styled.Text`
  font-size: ${({ theme }) => theme.buttonTextSize}
  font-weight: bold;
  color: ${({ theme }) => theme.normalText}
`;

export default function EmailLogin({ navigation }) {
  const dispatch = useDispatch();

  passwordRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);

  function _SignupButton() {
    navigation.navigate("Signup");
    console.log(`Email login page: move to sign in page`);
  }

  async function _onPressLoginButton() {
    try {
      dispatch(ProgressAction(true));
      const user = await login(email, password);
      const loginInfo = await readLoginInfo(email);
      dispatch(LoginAction(loginInfo.name, email, password));
      dispatch(ProgressAction(false));
    } catch (e) {
      dispatch(ProgressAction(false));
      if (e.message == "Firebase: Error (auth/wrong-password).") {
        Alert.alert("비밀번호를 확인해주세요");
        console.log(`EmailLoginPage: login error\nerror message: ${e.message}`);
      } else {
        Alert.alert("존재하지않는 이메일 계정입니다");
        console.log(`EmailLoginPage: login error\nerror message: ${e.message}`);
      }
    }
  }

  useEffect(() => {
    setDisabled(!(email && password));
  }, [email, password]);

  const LoginButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 50px;
    background-color: ${({ theme }) => theme.button};
    border-radius: 12px;
    opacity: ${disabled ? "0.25" : "1"};
  `;
  return (
    <Container>
      <SignupContainer>
        <SignupButton onPress={_SignupButton}>
          <SignupText>회원가입하기</SignupText>
        </SignupButton>
      </SignupContainer>
      <IDPWContainer>
        <MiddleContainer>
          <TextArea>
            <Text>E mail</Text>
          </TextArea>
          <InputArea>
            <Input
              placeholder="이메일을 입력하세요"
              keyboardType="email-address"
              placeholderTextColor="gray"
              returnKeyType="next"
              onChangeText={(text) => {
                setEmail(text);
              }}
              onSubmitEditing={() => {
                passwordRef.current.focus();
              }}
              onPress={() => Alert.alert("hihi")}
              autoComplete="email"
              autoFocus={true}
              maxLength={30}
              value={email}
              autoCapitalize="none"
            />
          </InputArea>
        </MiddleContainer>
        <MiddleContainer>
          <TextArea>
            <Text>비밀번호</Text>
          </TextArea>
          <InputArea>
            <Input
              ref={passwordRef}
              onChangeText={(text) => {
                setPassword(text);
              }}
              placeholder="비밀번호를 입력하세요"
              placeholderTextColor="gray"
              secureTextEntry={true}
              autoComplete="password"
              blurOnsubmit={true}
              value={password}
              maxLength={30}
              returnKeyType="done"
              onSubmitEditing={_onPressLoginButton}
            />
          </InputArea>
        </MiddleContainer>
      </IDPWContainer>
      <FindIDPWContainer>
        <FindIDButton>
          <FindIDPWText>아이디 찾기</FindIDPWText>
        </FindIDButton>
        <FindPWButton>
          <FindIDPWText>패스워드 찾기</FindIDPWText>
        </FindPWButton>
      </FindIDPWContainer>
      <LoginButtonContainer>
        <LoginButton onPress={_onPressLoginButton} disabled={disabled}>
          <LoginButtonText>로그인</LoginButtonText>
        </LoginButton>
      </LoginButtonContainer>
    </Container>
  );
}
