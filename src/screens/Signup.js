import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components/native";
import { useDispatch } from "react-redux";
import { Alert, Dimensions } from "react-native";
import { signup, signupName } from "../data/firebase";
import { ProgressAction } from "../actions/ProgressAction";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
`;

const ScrollContainer = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

const MiddleContainer = styled.View`
  width: ${width}px
  justify-content: center;
  align-items: center;
  margin: 3px;
  margin-bottom: 5px
`;

const TextArea = styled.View`
  justify-content: center;
  align-items: center;
  width: 80%
  height: 50px;
  padding-left: 10px
`;

const Text = styled.Text`
  align-self: flex-start
  font-size: 18px;
  color: ${({ theme }) => theme.grayText};
`;

const InputArea = styled.View`
  width: 80%;
  height: 50px;
  background-color: ${({ theme }) => theme.emailPWInput};
  opacity: 0.7
  align-items: flex-start;
  justify-content: center;
  border-radius: 12px;
`;

const Input = styled.TextInput`
  color: black;
  font-size: 15px;
  height: 50px;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
`;

const SignupButtonText = styled.Text`
  font-size: ${({ theme }) => theme.buttonTextSize}
  font-weight: bold
  color: ${({ theme }) => theme.normalText};
`;

const ErrorMessageText = styled.Text`
  align-self: flex-start;
  color: red;
  font-size: ${({ theme }) => theme.normalTextSize};
`;

export default function Singup({ navigation }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassWord, setRePassWord] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const rePasswordRef = useRef();

  useEffect(() => {
    let _errorMessage = "";
    if (!name) {
      _errorMessage = "????????? ???????????????";
    } else if (!email) {
      _errorMessage = "???????????? ???????????????";
    } else if (!password) {
      _errorMessage = "??????????????? ???????????????";
    } else if (password.length < 6) {
      _errorMessage = "??????????????? 6?????? ?????? ???????????????";
    } else if (password !== rePassWord) {
      _errorMessage = "??????????????? ???????????? ????????????";
    } else {
      _errorMessage = null;
    }
    setErrorMessage(_errorMessage);
  }, [name, email, password, rePassWord]);

  useEffect(() => {
    setDisabled(!(name && email && password && rePassWord && !errorMessage));
  }, [name, email, password, rePassWord, errorMessage]);

  function AlertSignup() {
    Alert.alert(
      "??????",
      "?????? ????????? ???????????? ???????????????????",
      [
        { text: "?????????" },
        {
          text: "???",
          onPress: _Signup,
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            "This alert was dismissed by tapping outside of the alert dialog."
          ),
      }
    );
  }

  async function _Signup() {
    try {
      dispatch(ProgressAction(true));
      const user = await signup(email, password, name);
      console.log("Signup page: signup button clicked");
      navigation.navigate("EmailLogin");
      dispatch(ProgressAction(false));
    } catch (e) {
      dispatch(ProgressAction(false));
      if (e.message == "Firebase: Error (auth/email-already-in-use).") {
        Alert.alert(
          "????????? ??????",
          `?????? ????????? ??????????????????\n?????? ??????????????? ????????? ????????? ????????????`
        );
        console.log(`Signup page: signup failed reason: ${e.message}`);
      } else {
        Alert.alert("????????? ???????????? ??????????????????");
        console.log(`Signup page: signup failed reason: ${e.message}`);
      }
    }
  }

  const SignupButtonContainer = styled.View`
    width: ${width}px;
    justify-content: center;
    align-items: center;
    margin-top: ${disabled ? height * 0.049 : height * 0.12}px;
    margin-bottom: 15px;
  `;

  const SignupButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 50px;
    background-color: ${({ theme }) => theme.button};
    border-radius: 12px;
    opacity: ${disabled ? "0.25" : "1"};
  `;

  return (
    <Container>
      <ScrollContainer>
        <MiddleContainer style={{ marginTop: 15 }}>
          <TextArea>
            <Text>??????</Text>
          </TextArea>
          <InputArea>
            <Input
              ref={nameRef}
              value={name}
              onChangeText={(text) => setName(text)}
              onSubmitEditing={() => {
                emailRef.current.focus();
                setName(name.trim());
              }}
              placeholder="????????? ???????????????"
              placeholderTextColor="gray"
              autoComplete="name"
              returnKeyType="next"
              autoFocus={true}
              maxLength={15}
            />
          </InputArea>
        </MiddleContainer>
        <MiddleContainer>
          <TextArea>
            <Text>E mail</Text>
          </TextArea>
          <InputArea>
            <Input
              ref={emailRef}
              value={email}
              onChangeText={(text) => {
                setEmail(text);
              }}
              onSubmitEditing={() => {
                passwordRef.current.focus();
              }}
              placeholder="???????????? ???????????????"
              placeholderTextColor="gray"
              autoComplete="email"
              returnKeyType="next"
              keyboardType="email-address"
              maxLength={30}
            />
          </InputArea>
        </MiddleContainer>
        <MiddleContainer>
          <TextArea>
            <Text>????????????</Text>
          </TextArea>
          <InputArea>
            <Input
              ref={passwordRef}
              value={password}
              onChangeText={(text) => {
                setPassword(text);
              }}
              onSubmitEditing={() => {
                rePasswordRef.current.focus();
              }}
              placeholder="??????????????? ???????????????"
              placeholderTextColor="gray"
              secureTextEntry={true}
              autoComplete="password"
              returnKeyType="next"
              maxLength={30}
            />
          </InputArea>
        </MiddleContainer>
        <MiddleContainer>
          <TextArea>
            <Text>???????????? ??????</Text>
          </TextArea>
          <InputArea>
            <Input
              ref={rePasswordRef}
              value={rePassWord}
              onChangeText={(text) => {
                setRePassWord(text);
              }}
              onSubmitEditing={AlertSignup}
              placeholder="??????????????? ?????? ???????????????"
              placeholderTextColor="gray"
              secureTextEntry={true}
              autoComplete="password"
              returnKeyType="done"
              blurOnSubmit={true}
              maxLength={30}
            />
          </InputArea>
        </MiddleContainer>
        {errorMessage ? (
          <MiddleContainer>
            <TextArea>
              <ErrorMessageText>{errorMessage}</ErrorMessageText>
            </TextArea>
          </MiddleContainer>
        ) : null}
        <SignupButtonContainer>
          <SignupButton onPress={AlertSignup} disabled={disabled}>
            <SignupButtonText>????????????</SignupButtonText>
          </SignupButton>
        </SignupButtonContainer>
      </ScrollContainer>
    </Container>
  );
}
