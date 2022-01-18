import React, { useEffect } from "react";
import styled from "styled-components/native";
import { useSelector } from "react-redux";
import { FriendProfile, MyProfile } from "../components";
import { Dimensions } from "react-native";

const height = Dimensions.get("window").height;

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
  min-height: ${height * 0.91}px
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

export default function FriendList() {
  const loginInfo = useSelector((state) => {
    return state.loginInfo;
  });

  let friendList = [
    "육정수",
    "임현묵",
    "김민석",
    "박성재",
    "천건호",
    "육초코",
    "임머랭",
    "바선생",
    "강호동",
    "오태식",
    "이범배",
  ];

  return (
    <Container>
      <ScrollContainer>
        <MiddleContainer>
          <MyProfile
            name={loginInfo.name}
            myProfileClick={() => {
              console.log("Friend List Page: my profile clicked");
            }}
            myProfilePictureClick={() => {
              console.log("Friend List Page: my profile picture clicked");
            }}
          />

          {friendList.sort().map((name) => (
            <FriendProfile
              key={name}
              name={name}
              profileClick={() => {
                console.log("Friend List Page: profile clicked");
              }}
              profilePictureClick={() => {
                console.log("Friend List Page: profile picture clicked");
              }}
            />
          ))}
        </MiddleContainer>
      </ScrollContainer>
    </Container>
  );
}
