import React from "react";
import styled from "styled-components";

const Container = styled.View`
  background-color: red;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center
  margin: 20px;
`;

const Text = styled.Text`
  font-size: 30px;
  color: yellow;
`;

const TextArea = styled.View`
  justify-content: center;
  align-items:center
  width: 60px
  height: 50px
`;

const Input = styled.TextInput`
  color: white;
  font-size: 20px;
  height: 50px;
  padding-left: 10px;
`;

const InputArea = styled.View`
  background-color: black;
  width: 200px;
  height: 50px;
`;

const IDPW = ({ title }) => {
  return (
    <Container>
      <TextArea>
        <Text>{title}</Text>
      </TextArea>
      <InputArea>
        <Input />
      </InputArea>
    </Container>
  );
};

export default IDPW;
