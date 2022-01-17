import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../../pages/Auth/Login';
import SignUp from '../../pages/Auth/SignUp';
import routes from '../routes';

export default function AuthStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.LOGIN_PAGE}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routes.SIGN_UP_PAGE}
        component={SignUp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
