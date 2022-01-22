import React, { useState } from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TeamSearchTextInput() {
  const width = Dimensions.get("window").width;
  const Container = styled.View`
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    width: ${width * 0.9}px;
    height: 60px;
  `;

  const TextInput = styled.TextInput`
    width: 90%;
    height: 55px;
    background-color: ${({ theme }) => theme.emailPWInput};
    border-radius: 10px;
    padding-left: 18px;
    padding-right: 18px;
    font-size: ${({ theme }) => theme.normalTextSize};
    margin-right: 5px;
  `;

  const IconContainer = styled.Pressable`
    justify-content: center;
    align-items: center;
  `;

  const [inputText, setInputText] = useState("");

  return (
    <Container>
      <TextInput
        maxLength={20}
        placeholder="찾으시는 팀  이름을 입력하시오"
        returnKeyType="search"
        onChangeText={(text) => {
          setInputText(text);
        }}
        value={inputText}
      />
      <IconContainer onPress={() => {}}>
        <MaterialCommunityIcons name="magnify" size={48} />
      </IconContainer>
    </Container>
  );
}
