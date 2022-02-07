import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { useSelector } from "react-redux";
import { FriendProfile, MyProfile } from "../components";
import {
  Dimensions,
  Vibration,
  Alert,
  Modal,
  View,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import { theme } from "../data/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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

export default function FriendList({ navigation }) {
  const [isScroll, setIsScroll] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const FreindSettingIconContainer = styled.Pressable`
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 30px;
    right: 28px;
    width: 64px;
    height: 64px;
    opacity: ${isScroll ? 0.6 : 1}
    border-radius: 32px;
    background-color: pink;
  `;

  const ModalContainer = styled.Pressable`
    flex: 1;
    align-items: center;
    justify-content: center;
  `;

  const ModalView = styled.View`
    background-color: #e6f4f1;
    padding: 5px;
    justify-content: center;
    border-radius: 15px;
    position: absolute;
    right: 20px;
    bottom: 180px;
  `;

  const ModalTextContainer = styled.Pressable`
    padding: 3px;
    margin: 5px;
    padding: 10px 20px;
  `;

  const ModalText = styled.Text`
    color: black;
    font-size: ${({ theme }) => theme.smallTextSize};
  `;

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

  // my profile click event
  function _myProfileClick(loginInfo) {
    console.log(
      `Friend List Page: my profile(name: ${loginInfo.name}, email: ${loginInfo.email}) clicked`
    );
  }

  function _myProfilePictureClick() {
    console.log("Friend List Page: my profile picture clicked");
  }

  function _myProfileLongClick() {
    Vibration.vibrate(30);
    console.log(`Friend List: my profile long click`);
  }

  // friends profile click event
  function _profileClick(friendName) {
    console.log(
      `Friend List Page: friend profile(name: ${friendName}, email: null) clicked`
    );
  }

  function _profilePictureClick() {
    console.log(`Friend List Page: profile picture clicked`);
  }

  function _profileLongClick() {
    Vibration.vibrate(30);
    console.log(`Friend List: profile long click`);
  }

  return (
    <Container>
      <ScrollContainer
        onScrollBeginDrag={() => {
          setIsScroll(true);
        }}
        onMomentumScrollEnd={() => {
          setIsScroll(false);
        }}
      >
        <MiddleContainer>
          <MyProfile
            name={loginInfo.name}
            myProfileClick={() => {
              _myProfileClick(loginInfo);
            }}
            myProfilePictureClick={() => {
              _myProfilePictureClick();
            }}
            myProfileLongClick={() => {
              _myProfileLongClick();
            }}
          />

          {friendList.sort().map((name) => (
            <FriendProfile
              key={name}
              name={name}
              profileClick={() => {
                _profileClick(name);
              }}
              profilePictureClick={() => {
                _profilePictureClick();
              }}
              profileLongClick={() => {
                _profileLongClick();
              }}
            />
          ))}
        </MiddleContainer>
      </ScrollContainer>
      <FreindSettingIconContainer
        style={({ pressed }) => [
          { backgroundColor: pressed ? theme.button2Activated : theme.button2 },
        ]}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <MaterialCommunityIcons name="dots-vertical" size={35} />
      </FreindSettingIconContainer>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <ModalContainer
          onPress={() => {
            setModalVisible(false);
          }}
        >
          <ModalView>
            <ModalTextContainer
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "lightgray" : "#e6f4f1",
                  borderRadius: 10,
                  justifContent: "center",
                  alignItems: "center",
                },
              ]}
              onPress={() => {
                navigation.navigate("FriendSetting");
                setModalVisible(false);
              }}
            >
              <ModalText>친구 관리</ModalText>
            </ModalTextContainer>
            <ModalTextContainer
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "lightgray" : "#e6f4f1",
                  borderRadius: 10,
                  justifContent: "center",
                  alignItems: "center",
                },
              ]}
              onPress={() => {
                navigation.navigate("AddFriend");
                setModalVisible(false);
              }}
            >
              <ModalText>친구 추가</ModalText>
            </ModalTextContainer>
          </ModalView>
        </ModalContainer>
      </Modal>
    </Container>
  );
}

// friends information >> key value, id == email
