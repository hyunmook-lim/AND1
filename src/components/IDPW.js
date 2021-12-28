import React from 'react';
import styled from 'styled-components';


const Container = styled.View`
    flex: 1;
    background-color: red;
    flexDirection: row;
`

const TextArea = styled.Text`
    flex : 1;
    font-size: 40px;
    color: green;
`

const InputArea =styled.TextInput`
    flex : 3;
    background-color : black;
`

const IDPW = () => {

    return (
        <Container style={{height: '30%', width: '50%'}}>
        <TextArea>
            ID
        </TextArea>
        <InputArea>
        
        </InputArea>
    </Container>
    );
};

export default IDPW;