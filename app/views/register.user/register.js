import React from 'react';
import {Container, Title,Input,ButtonSubmit,Textsubmit} from './styles'


function Register(){
    return(
        <Container>
        <Title>Login</Title>
        <Input placeholderTextColor="#fff" placeholder="E-mail"/>
        <Input placeholderTextColor="#fff" placeholder="Senha" secureTextEntry/>
        <Input placeholderTextColor="#fff" placeholder="Confirme a Senha" secureTextEntry/>
        <ButtonSubmit>
            <Textsubmit>Registrar</Textsubmit>
        </ButtonSubmit>
        </Container>
      
    )
}

export default Register;