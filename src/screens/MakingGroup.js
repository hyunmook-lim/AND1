import React from "react";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

const TeamSettingCon = styled.SafeAreaView`
  flex: 2;
  width : 90%;
  justify-content: center;
  align-items: center;
  background-color: red;
  margin : 10px;
`

const MembersCon = styled.SafeAreaView`
  flex : 1;
  width : 90%;
  justify-content: center;
  align-items: center;
  background-color: blue;
  margin: 10px;
  `

const Text = styled.Text`
  color: ${({ theme }) => theme.normalText}
  font-size: 40px;
  font-weight: bold
`;
const TeamSearchButtion = styled.TouchableOpacity`
  flex: 0.3;
  width : 90%;
  justify-content: center;
  align-items: center;
  background-color: black;
  margin: 10px; 
`

export default function MakingGroup() {
  return (
    <Container>
      <TeamSettingCon>
        <Text>Team setting</Text>
      </TeamSettingCon>
      <MembersCon>
        <Text>Members</Text>
      </MembersCon>
      <TeamSearchButtion>
        <Text>TeamSerachButton</Text>
      </TeamSearchButtion>
    </Container>
  );
}