import LottieView from 'lottie-react-native';
import React from 'react';
import styles from './Loading.style';

export default function Loading() {
  return (
    <LottieView
      source={require('../../assets/loading.json')}
      autoPlay
      loop
      style={styles.lottieView}
    />
  );
}
