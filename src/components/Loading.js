import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components";
import { theme } from "../data/theme";

const Container = styled.View`
  position: absolute;
  z-index: 2;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  justify-content: center;
  background-color: ${theme.loadingBackground};
`;

export default function Loading() {
  return (
    <Container>
      <ActivityIndicator size={"large"} color={theme.loadingIndicator} />
    </Container>
  );
}
