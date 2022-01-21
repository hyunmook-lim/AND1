import React from "react";
import styled from "styled-components/native";
import TeamSearchTextInput from "../components/TeamSearchTextInput";

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
  padding-top: 10px;
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

  return (
    <Container>
      <TitleContainer>
        <Title>팀 검색하기</Title>
      </TitleContainer>
      <SearchInputContainer>
        <TeamSearchTextInput />
      </SearchInputContainer>
    </Container>
  );
}
