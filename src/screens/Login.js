import React from "react";
import styled from "styled-components/native";
import { IDPW } from "../components";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: blue;
  justify-content: center;
  align-items: center;
`;

export default function Login() {
  return (
    <Container>
      <IDPW title="ID" />
      <IDPW title="PW" />
    </Container>
  );
}
