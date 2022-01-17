import React from 'react';
import {View, Text, Image} from 'react-native';
import LottieView from 'lottie-react-native';
import {Formik} from 'formik';
import LinearGradient from 'react-native-linear-gradient';
import Input from '../../../components/Input';
import routes from '../../../navigation/routes';
import styles from './Login.style';
import Toast from 'react-native-toast-message';
import Button from '../../../components/Button';
import auth from '@react-native-firebase/auth';

export default function Login({navigation}) {
  function handleNavigateSignUp() {
    navigation.navigate(routes.SIGN_UP_PAGE);
  }

  function handleLogin(loginData) {
    if (!loginData.email.trim() || !loginData.password.trim()) {
      Toast.show({
        type: 'error',
        text1: 'email or password can not be empty',
      });
    } else {
      auth()
        .signInWithEmailAndPassword(loginData.email, loginData.password)
        .then(() => {
          Toast.show({
            type: 'success',
            text1: 'Login Successful',
            text2: 'Lets start an activity!',
          });
        })
        .catch(error => {
          Toast.show({
            type: 'error',
            text1: 'Login Failed!',
          });
          console.log(error);
        });
    }
  }

  return (
    <LinearGradient colors={['#d1fffd', '#f4b6e2']} style={styles.container}>
      <View style={styles.animationView}>
        <LottieView
          source={require('../../../assets/walking.json')}
          autoPlay
          loop
        />
      </View>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={formValues => handleLogin(formValues)}>
        {({handleSubmit, handleChange, values}) => (
          <View>
            <Input
              label="Email"
              placeholder="Email..."
              autoCapitalize="none"
              value={values.email}
              onChangeText={handleChange('email')}
            />
            <Input
              label="Password"
              placeholder="Password..."
              secureTextEntry
              value={values.password}
              onChangeText={handleChange('password')}
            />
            <Button
              label="Log In"
              onPress={handleSubmit}
              type="transparentBorderless"
            />
            <Button
              label="Sign Up"
              type="secondaryTheme"
              onPress={handleNavigateSignUp}
            />
          </View>
        )}
      </Formik>
    </LinearGradient>
  );
}
