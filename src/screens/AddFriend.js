import React from "react";
import styled from "styled-components/native";

export default function AddFriend() {
  const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background};
  `;

  return <Container></Container>;
}
