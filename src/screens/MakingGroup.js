import React from "react";
import styled from "styled-components/native";

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

export default function MakingGroup() {
  return (
    <Container>
      <Text>Making Group Page</Text>
    </Container>
  );
}