import React, { useEffect } from 'react';
import Navigation from './navigation';
import Toast from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <Navigation />
      <Toast />
    </>
  );
}
