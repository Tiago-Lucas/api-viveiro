import React from 'react';
import {Container, Title,Input,ButtonSubmit,Textsubmit} from './styles'


function Register(){
    return(
        <Container>
        <Title>Login</Title>
        <Input placeholderTextColor="#000" placeholder="Nome"/>
        <Input placeholderTextColor="#000" placeholder="E-mail"/>
        <Input placeholderTextColor="#000" placeholder="Senha" secureTextEntry/>
        <Input placeholderTextColor="#000" placeholder="Confirme a Senha" secureTextEntry/>
        <ButtonSubmit>
            <Textsubmit>Registrar</Textsubmit>
        </ButtonSubmit>
        </Container>
      
    )
}

export default Register;