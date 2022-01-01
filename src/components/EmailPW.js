import React, { useRef } from "react";
import styled from "styled-components";

const Container = styled.View`
  margin: 1px;
  justify-content: center;
  align-items: center;
`;

const MiddleContainer = styled.View`
  background-color: ${({ theme }) => theme.emailPWInput}
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px
  margin: 10px;
`;

const TextArea = styled.View`
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 50px;
  border-right-color: black;
  border-right-width: 1.5px;
`;

const Text = styled.Text`
  font-size: 22px;
  color: ${({ theme }) => theme.normalText};
`;

const InputArea = styled.View`
  width: 220px;
  height: 50px;
  align-items: flex-start;
  justify-content: center;
`;

const Input = styled.TextInput`
  color: black;
  font-size: 16px;
  height: 50px;
  padding-left: 10px;
`;

export default function EmailPW() {
  const passwordRef = useRef();

  return (
    <Container>
      <MiddleContainer>
        <TextArea>
          <Text>Email</Text>
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
            autoComplete="email"
          />
        </InputArea>
      </MiddleContainer>
      <MiddleContainer>
        <TextArea>
          <Text>PW</Text>
        </TextArea>
        <InputArea>
          <Input
            ref={passwordRef}
            placeholder="패스워드를 입력하세요"
            placeholderTextColor="gray"
            secureTextEntry={true}
            autoComplete="password"
          />
        </InputArea>
      </MiddleContainer>
    </Container>
  );
}
