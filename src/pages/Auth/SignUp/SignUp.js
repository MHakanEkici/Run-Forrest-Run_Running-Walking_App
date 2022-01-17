import React from 'react';
import {Text, View} from 'react-native';
import routes from '../../../navigation/routes';
import {Formik} from 'formik';
import Input from '../../../components/Input';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../../components/Button';
import Toast from 'react-native-toast-message';
import styles from './SignUp.style';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SignUp({navigation}) {
  function handleReturnLogin() {
    navigation.navigate(routes.LOGIN_PAGE);
  }

  function saveUserToDatabase(userData, displayName) {
    const usersReference = database().ref(`userInfo/${userData.uid}`);
    usersReference.push({
      userId: userData.uid,
      displayName: displayName,
      email: userData.email,
      date: Date.now(),
    });
    Toast.show({
      type: 'success',
      text1: 'User account created & logged in!',
    });
  }

  function handleSignUp(signData) {
    let displayName = signData.name + ' ' + signData.surname;
    if (signData.password !== signData.rePassword) {
      Toast.show({
        type: 'error',
        text1: 'Passwords do not match',
      });
      return;
    }
    if (
      !signData.email.trim() ||
      !signData.password.trim() ||
      !signData.name.trim() ||
      !signData.surname.trim()
    ) {
      Toast.show({
        type: 'error',
        text1: 'Please provide all required information above',
      });
    } else {
      auth()
        .createUserWithEmailAndPassword(signData.email, signData.password)
        .then(response => {
          auth()
            .currentUser.updateProfile({
              displayName: displayName,
            })
            .then(() => {
              saveUserToDatabase(response.user._user, displayName);
            });
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Toast.show({
              type: 'error',
              text1: 'That email address is already in use!',
            });
          }

          if (error.code === 'auth/invalid-email') {
            Toast.show({
              type: 'error',
              text1: 'That email address is invalid!',
            });
          }

          if (error.code === 'auth/weak-password') {
            Toast.show({
              type: 'error',
              text1: 'Password should be at least 6 characters',
            });
          }
          console.error(error);
        });
    }
  }

  return (
    <LinearGradient colors={['#8c9ed7', '#ede1f8']} style={styles.container}>
      <Formik
        initialValues={{
          name: '',
          surname: '',
          email: '',
          password: '',
          rePassword: '',
        }}
        onSubmit={formValues => handleSignUp(formValues)}>
        {({handleSubmit, handleChange, values}) => (
          <View>
            <Input
              label="Name"
              placeholder="Name..."
              value={values.name}
              onChangeText={handleChange('name')}
            />
            <Input
              label="Surname"
              placeholder="Surname..."
              value={values.surname}
              onChangeText={handleChange('surname')}
            />
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
            <Input
              label="Confirm Your Password"
              placeholder="Confirm Password..."
              secureTextEntry
              value={values.rePassword}
              onChangeText={handleChange('rePassword')}
            />
            <Button
              label="Sign Up"
              onPress={handleSubmit}
              type="transparentBorderless"
            />
          </View>
        )}
      </Formik>
      <Button
        label={
          <Text>
            <Icon name="arrow-left" size={27} /> Back
          </Text>
        }
        type="secondaryTheme"
        onPress={handleReturnLogin}
      />
    </LinearGradient>
  );
}
