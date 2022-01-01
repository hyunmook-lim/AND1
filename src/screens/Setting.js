import React from "react";
import styled from "styled-components/native";
import { useDispatch } from "react-redux";
import { LoginAction } from "../actions/LoginAction";

const TestLogoutContainer = styled.View`
  justify-content: center;
  align-items: center;
  position: absolute
  top: 14%;
  bottom: 70%
  right: 10%;
  left: 10%
`;

const TestLogout = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.button}
  justify-content: center;
  align-items:center
  width: 150px;
  height: 50px;
  border-radius: 15px
`;

const TestText = styled.Text`
  color: ${({ theme }) => theme.normalText};
  font-size: 20px;
  font-weight: bold;
`;

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

const Text = styled.Text`
  color: ${({ theme }) => theme.normalText}
  font-size: 40px;
  font-weight: bold
`;

export default function Setting() {
  const dispatch = useDispatch();
  return (
    <Container>
      <TestLogoutContainer>
        <TestLogout
          onPress={() => {
            dispatch(LoginAction(false));
            console.log("setting page: log out");
          }}
        >
          <TestText>Test Logout</TestText>
        </TestLogout>
      </TestLogoutContainer>
      <Text>Setting Page</Text>
    </Container>
  );
}
