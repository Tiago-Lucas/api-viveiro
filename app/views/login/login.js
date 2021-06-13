import React from 'react';
import {Container, Title,Input,ButtonSubmit,Textsubmit} from './styles'


function Login(){
    return(
        <Container>
        <Title>Login</Title>
        <Input placeholderTextColor="#fff" placeholder="E-mail"/>
        <Input placeholderTextColor="#fff" placeholder="Senha" secureTextEntry/>
        <ButtonSubmit>
            <Textsubmit>Entrar</Textsubmit>
        </ButtonSubmit>
        </Container>
      
    )
}

export default Login;
