import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components';

const SocialLoginContainer = styled.View`
  height: 50px;
  width: 250px;
  flexDirection: row;
  background-color : skyblue;
  justifyContent: space-evenly;
  alignItems: center;
`

const SocialLoginButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color : white;
  borderRadius: 100;
  justifyContent : center;
`

function socialLogin() {
  const buttonClickHandler = () => {
    console.log('button clicked!');
  };

  return (
    <SocialLoginContainer>
    <SocialLoginButton
      onPress={buttonClickHandler}>
        <Text style = {{color : 'black'}}> Naver </Text>
    </SocialLoginButton>
    <SocialLoginButton
      onPress={buttonClickHandler}>
        <Text style = {{color : 'black'}}> Kakao </Text>
    </SocialLoginButton>
    <SocialLoginButton
      onPress={buttonClickHandler}>
        <Text style = {{color : 'black'}}> Google </Text>
    </SocialLoginButton>
    </SocialLoginContainer>
    
  )
}

export default socialLogin;