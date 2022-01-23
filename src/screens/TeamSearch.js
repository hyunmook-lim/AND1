import React, { useState } from "react";
import styled from "styled-components/native";
import { Alert, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../data/theme";

const width = Dimensions.get("window").width;

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 10px;
`;

const SearchInputContainer = styled.View`
  justify-content: center;
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

export default function TeamSearch() {
  const TitleContainer = styled.View`
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
  `;

  const Title = styled.Text`
    font-size: ${({ theme }) => theme.pageTitleTextSize};
    color: ${({ theme }) => theme.normalText};
    font-weight: bold;
  `;

  const [inputText, setInputText] = useState("");

  function _teamSearch() {
    Alert.alert(inputText);
  }

  return (
    <Container>
      <TitleContainer>
        <Title>팀 검색하기</Title>
      </TitleContainer>
      <SearchInputContainer>
        <TextInput
          maxLength={20}
          placeholder="찾으시는 팀 이름을 입력하시오"
          returnKeyType="search"
          onChangeText={(text) => {
            setInputText(text);
          }}
          onSubmitEditing={_teamSearch}
          value={inputText}
        />
        <IconContainer onPress={_teamSearch}>
          <MaterialCommunityIcons
            name="magnify"
            size={42}
            color={theme.normalText}
          />
        </IconContainer>
      </SearchInputContainer>
    </Container>
  );
}
