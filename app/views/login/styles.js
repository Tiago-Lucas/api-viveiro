import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
flex: 1;
align-items:center;
justify-content: center;
background-color: #fff;
padding: 30px
width:100%
`

export const Title = styled.Text `
color : #0f3c27;
font-size: 26px;
font-weight: 700;
margin-bottom: 30px
`    
export const Input = styled.TextInput`
 border: 2px solid #0f3c27;
 margin-bottom: 30px
 padding:15px 20px
 color: #5e6c77
 font-size: 20px
 border-radius: 9px
 width:90%
 `

export const ButtonSubmit = styled.TouchableOpacity`
background-color: #66903c
border-radius: 9px
width:90%
padding: 15px 20px
align-items:center;
`

export const Textsubmit = styled.Text`
color: #f0eef1
font-size:20px;
font-weight:bold
`
