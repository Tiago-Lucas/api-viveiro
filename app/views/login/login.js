import React from 'react';
import {Container, Title,Input,ButtonSubmit,Textsubmit} from './styles'

const Login = ({navigation}) =>{
    return(
        <Container>
        <Title>Login</Title>
        <Input placeholderTextColor="#000" placeholder="E-mail"/>
        <Input placeholderTextColor="#000" placeholder="Senha" secureTextEntry/>
        <ButtonSubmit >
            <Textsubmit>Entrar</Textsubmit>
        </ButtonSubmit>
        <ButtonSubmit onPress={()=> navigation.navigate('Register')}>
            <Textsubmit>Cadastrar usuário</Textsubmit>
        </ButtonSubmit>
        </Container>
      
    )
}

export default Login;
