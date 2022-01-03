import React from "react";
import styled from "styled-components/native";
import { color } from "../data/color";
import { FriendProfile } from "../components";

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

const ScrollContainer = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

const MiddleContainer = styled.View`
  width: 94%;
  align-self: center;
  align-items: center;
  justify-content: flex-start;
  padding: 10px
  background-color: ${({ theme }) => theme.friendContainer};
  margin-top: 8px
  margin-bottom: 8px
  border-radius: 10px;
`;

const Te = styled.Text`
  color: black;
  font-size: 30px;
`;

const MyProfile = styled.View`
  height: 80px;
  width: 98%;
  background-color: ${({ theme }) => theme.profileContainer}
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  padding: 2px 5px;
  margin-bottom: 40px
`;

const MyPicture = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: ${({ theme }) => theme.basicPicture};
`;

const Text = styled.Text`
  color: ${({ theme }) => theme.normalText}
  position: absolute;
  font-size: 40px;
  font-weight: bold;
  transform: rotate(-40deg)
  opacity: 0.3
`;

export default function FriendList() {
  return (
    <Container>
      <ScrollContainer>
        <MiddleContainer>
          <MyProfile>
            <MyPicture />
          </MyProfile>
          <FriendProfile />
          <FriendProfile />
          <FriendProfile />
          <FriendProfile />
          <FriendProfile />
          <FriendProfile />
          <FriendProfile />
          <FriendProfile />
          <FriendProfile />
          <FriendProfile />
          <FriendProfile />
          <FriendProfile />
          <FriendProfile />
          <FriendProfile />
          <FriendProfile />
          <FriendProfile />
          <FriendProfile />
          <FriendProfile />
          <FriendProfile />
          <FriendProfile />
          <FriendProfile />
          <FriendProfile />
          <FriendProfile />
          <FriendProfile />
          <FriendProfile />
          <FriendProfile />
          <FriendProfile />
          <FriendProfile />
          <FriendProfile />
          <FriendProfile />
          <FriendProfile />
          <FriendProfile />
          <FriendProfile />
        </MiddleContainer>
      </ScrollContainer>
      <Text>Friends List Page</Text>
    </Container>
  );
}
