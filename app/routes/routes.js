import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../views/login/login'
import Register from '../views/register.user/register'
import Home from '../views/home/home';

const Stack = createStackNavigator()

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Login"
        component={Login}
        options={{headerTitle: null, headerShown: false,}}
      />
      <Stack.Screen 
        name="Register"
        component={Register}
        options={{headerTitle: 'Novo Usuário',headerShown:true}}
      />
      <Stack.Screen 
        name="Home"
        component={Home}
        options={{headerTitle: 'Home',headerShown:true}}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Routes;