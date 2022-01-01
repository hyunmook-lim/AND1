import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  height: 60px;
  width: 98%;
  background-color: ${({ theme }) => theme.profileContainer};
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  padding: 2px 5px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Picture = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.basicPicture};
`;

export default function FriendProfile() {
  return (
    <Container>
      <Picture />
    </Container>
  );
}
