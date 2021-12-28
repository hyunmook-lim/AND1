import React from 'react';
import styled from 'styled-components/native'
import IDPW from './components/IDPW';


const Container = styled.SafeAreaView`
    flex: 1;
    background-color: blue;
    justify-content: flex-start;

`



export default function App() {

    return (
        <Container>
            <IDPW>

            </IDPW>
            <IDPW>
                
            </IDPW>
        </Container>
    )
}