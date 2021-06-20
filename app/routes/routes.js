import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../views/login/login'
import Register from '../views/register.user/register'

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
        options={{headerTitle: null,headerShown:false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Routes;