import React from "react";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
`;

const Text = styled.Text`
  color: ${({ theme }) => theme.normalText}
  font-size: 40px;
  font-weight: bold
`;

export default function Singin() {
  return (
    <Container>
      <Text>Sign In Page</Text>
    </Container>
  );
}
