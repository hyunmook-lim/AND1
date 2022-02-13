import React, { useState } from "react";
import { Dimensions, Modal } from "react-native";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";

const height = Dimensions.get("window").height;


const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

const SearchCon = styled.SafeAreaView`
  flex : 0.8;
  width : 90%;
  justify-content: center;
  align-items: center;
  background-color: black;
  margin: 10px;
`

const TeamListCon = styled.SafeAreaView`
  flex : 9;
  width : 90%;
  justify-content: center;
  align-items: center;
  background-color: red;
  margin: 10px;
  `

const Text = styled.Text`
  color: ${({ theme }) => theme.normalText}
  font-size: 40px;
  font-weight: bold
`;
const TeamMakingButton = styled.TouchableOpacity`
  flex: 1;
  width : 90%;
  justify-content: center;
  align-items: center;
  background-color: black;
  margin: 10px; 
`

const ModalContainer = styled.Pressable`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const ModalView = styled.View`
  background-color : white;
  padding: 10px;
  margin: 10px;
  position: absolute;
  width: 90%;
  height: 65%;
  border-radius: 5px;
  
`

export default function MakingGroup() {
  const [modalVisible, setModalVisible] = useState(false); // when button clicked, get teammaking setting

  return (
      <Container>
        <SearchCon>
          <Text>SearchCon</Text>
        </SearchCon>
        <TeamListCon>
          <Text>TeamListCon</Text>
        </TeamListCon>
        <TeamMakingButton
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Text>TeamMakingButton</Text>
        </TeamMakingButton>
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose= {() => {
          setModalVisible(false);
        }}
      > 
        <ModalContainer
          onPress={() => {
            setModalVisible(false);
          }}
        >
          <ModalView>
            <Text> Hello! </Text>
          </ModalView>
        </ModalContainer>

      </Modal>
      </Container>

    
  );
}
