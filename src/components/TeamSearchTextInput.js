import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

export default function TeamSearchTextInput() {
  const width = Dimensions.get("window").width;
  const Container = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
  `;

  const TextInput = styled.TextInput`
    width: ${width * 0.8}px;
    height: 55px;
    background-color: ${({ theme }) => theme.emailPWInput}
    border-radius: 10px;
    padding-left: 18px;
    padding-right: 18px;
    font-size: ${({ theme }) => theme.normalTextSize}
  `;

  return (
    <Container>
      <TextInput />
    </Container>
  );
}
