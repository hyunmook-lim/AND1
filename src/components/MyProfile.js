import React from "react";
import styled from "styled-components/native";

const Container = styled.TouchableOpacity`
  height: 80px;
  width: 98%;
  background-color: ${({ theme }) => theme.profileContainer};
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  padding: 2px 5px;
  margin-top: 10px
  margin-bottom: 25px;
`;

const PictureContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
`;

const Picture = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 35px;
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
  font-size: 22px;
  font-weight: bold;
`;

export default function MyProfile({
  name,
  myProfilePictureClick,
  myProfileClick,
}) {
  return (
    <Container onPress={myProfileClick}>
      <PictureContainer onPress={myProfilePictureClick}>
        <Picture />
      </PictureContainer>
      <ProfileTextContainer>
        <ProfileText>{name}</ProfileText>
      </ProfileTextContainer>
    </Container>
  );
}
