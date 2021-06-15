import React from 'react';
import {Container, Title,Input,ButtonSubmit,Textsubmit} from './styles'

function Login(){
    return(
        <Container>
        <Title>Login</Title>
        <Input placeholderTextColor="#000" placeholder="E-mail"/>
        <Input placeholderTextColor="#000" placeholder="Senha" secureTextEntry/>
        <ButtonSubmit>
            <Textsubmit>Entrar</Textsubmit>
        </ButtonSubmit>
        </Container>
      
    )
}

export default Login;
