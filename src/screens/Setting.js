import React from "react";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";
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
  position: absolute
  font-size: 40px;
  font-weight: bold
`;

const InfoContainer = styled.View`
  flex: 0.44;
  justify-content: flex-start;
  align-items: flex-start;
`;

const InfoText = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.normalText};
`;

export default function Setting() {
  const dispatch = useDispatch();

  const loginInfo = useSelector((state) => {
    return state.loginInfo;
  });

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
      <InfoContainer>
        <InfoText>{`name\n${loginInfo.name}\n\nemail\n${loginInfo.email}`}</InfoText>
      </InfoContainer>
      <Text>Setting Page</Text>
    </Container>
  );
}
