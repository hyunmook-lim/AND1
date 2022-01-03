import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Alert, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
`;

const ScrollContainer = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

const MiddleContainer = styled.View`
  width: ${width}px
  justify-content: center;
  align-items: center;
  margin: 3px;
  margin-bottom: 5px
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
  font-size: 18px;
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
  font-size: 16px;
  height: 50px;
  padding-left: 15px;
`;

const SignupButtonContainer = styled.View`
  width: ${width}px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: ${height * 0.1}px;
`;

const SignupButtonText = styled.Text`
  font-size: ${({ theme }) => theme.buttonTextSize}
  font-weight: bold
  color: ${({ theme }) => theme.normalText};
`;

const ErrorMessageText = styled.Text`
  align-self: flex-start;
  color: red;
  font-size: ${({ theme }) => theme.normalTextSize};
`;

export default function Singup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassWord, setRePassWord] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const rePasswordRef = useRef();

  useEffect(() => {
    let _errorMessage = "";
    if (!name) {
      _errorMessage = "이름을 입력하세요";
    } else if (!email) {
      _errorMessage = "이메일을 입력하세요";
    } else if (!password) {
      _errorMessage = "비밀번호를 입력하세요";
    } else if (password.length < 6) {
      _errorMessage = "비밀번호를 6자리 이상 입력하세요";
    } else if (password !== rePassWord) {
      _errorMessage = "비밀번호가 일치하지 않습니다";
    } else {
      _errorMessage = null;
    }
    setErrorMessage(_errorMessage);
  }, [name, email, password, rePassWord]);

  useEffect(() => {
    setDisabled(
      !(name && email && password && rePassWord && password == rePassWord)
    );
  }, [name, email, password, rePassWord]);

  function _SignupButton() {
    Alert.alert("알림", "hi!");
    console.log("Signup page: signup button clicked");
  }

  const SignupButton = styled.TouchableOpacity`
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
      <ScrollContainer>
        <MiddleContainer style={{ marginTop: 15 }}>
          <TextArea>
            <Text>이름</Text>
          </TextArea>
          <InputArea>
            <Input
              ref={nameRef}
              value={name}
              onChangeText={(text) => setName(text)}
              onSubmitEditing={() => {
                emailRef.current.focus();
                setName(name.trim());
              }}
              placeholder="이름을 입력하세요"
              placeholderTextColor="gray"
              autoComplete="name"
              returnKeyType="next"
            />
          </InputArea>
        </MiddleContainer>
        <MiddleContainer>
          <TextArea>
            <Text>E mail</Text>
          </TextArea>
          <InputArea>
            <Input
              ref={emailRef}
              value={email}
              onChangeText={(text) => {
                setEmail(text);
              }}
              onSubmitEditing={() => {
                passwordRef.current.focus();
              }}
              placeholder="이메일을 입력하세요"
              placeholderTextColor="gray"
              autoComplete="email"
              returnKeyType="next"
              keyboardType="email-address"
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
              value={password}
              onChangeText={(text) => {
                setPassword(text);
              }}
              onSubmitEditing={() => {
                rePasswordRef.current.focus();
              }}
              placeholder="비밀번호를 입력하세요"
              placeholderTextColor="gray"
              secureTextEntry={true}
              autoComplete="password"
              returnKeyType="next"
            />
          </InputArea>
        </MiddleContainer>
        <MiddleContainer>
          <TextArea>
            <Text>비밀번호 확인</Text>
          </TextArea>
          <InputArea>
            <Input
              ref={rePasswordRef}
              value={rePassWord}
              onChangeText={(text) => {
                setRePassWord(text);
              }}
              onSubmitEditing={() => {
                _SignupButton();
              }}
              placeholder="비밀번호를 다시 입력하세요"
              placeholderTextColor="gray"
              secureTextEntry={true}
              autoComplete="password"
              returnKeyType="done"
            />
          </InputArea>
        </MiddleContainer>
        {errorMessage ? (
          <MiddleContainer>
            <TextArea>
              <ErrorMessageText>{errorMessage}</ErrorMessageText>
            </TextArea>
          </MiddleContainer>
        ) : null}
        <SignupButtonContainer>
          <SignupButton
            onPress={() => {
              _SignupButton();
            }}
            disabled={disabled}
          >
            <SignupButtonText>회원가입</SignupButtonText>
          </SignupButton>
        </SignupButtonContainer>
      </ScrollContainer>
    </Container>
  );
}
