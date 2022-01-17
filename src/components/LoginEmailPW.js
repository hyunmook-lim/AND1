// not used

import React, { useRef } from "react";
import styled from "styled-components";
import { Alert, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

const Container = styled.View`
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

export default function LoginEmailPW(email, password) {
  const passwordRef = useRef();

  return (
    <Container>
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
            onSubmitEditing={() => {
              passwordRef.current.focus();
            }}
            onPress={() => Alert.alert("hihi")}
            autoComplete="email"
            autoFocus={true}
            maxLength={15}
            value={email}
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
            placeholder="비밀번호를 입력하세요"
            placeholderTextColor="gray"
            secureTextEntry={true}
            autoComplete="password"
            blurOnsubmit={true}
            value={password}
          />
        </InputArea>
      </MiddleContainer>
    </Container>
  );
}
