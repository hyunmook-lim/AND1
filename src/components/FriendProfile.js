import React from "react";
import styled from "styled-components/native";
import { theme } from "../data/theme";

const Container = styled.Pressable`
  height: 60px;
  width: 98%;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  padding: 2px 5px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const PictureContainer = styled.Pressable`
  justify-content: center;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
`;

const Picture = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.basicPicture};
`;

const ProfileTextContainer = styled.View`
  justify-content: center;
  align-items: flex-start;
  padding: 2px;
  padding-left: 20px;
`;

const ProfileText = styled.Text`
  color: ${({ theme }) => theme.normalText};
  font-size: 20px;
  font-weight: bold;
`;

export default function FriendProfile({
  name,
  profilePictureClick,
  profileClick,
  profileLongClick,
}) {
  return (
    <Container
      onPress={profileClick}
      onLongPress={profileLongClick}
      delayLongPress={500}
      style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? theme.profileContainerActivated
            : theme.profileContainer,
        },
      ]}
    >
      <PictureContainer onPress={profilePictureClick}>
        <Picture />
      </PictureContainer>
      <ProfileTextContainer>
        <ProfileText>{name}</ProfileText>
      </ProfileTextContainer>
    </Container>
  );
}
