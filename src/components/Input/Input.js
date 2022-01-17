import React from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './Input.style';

export default function Input({label, ...otherProps}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} {...otherProps} />
      </View>
    </View>
  );
}
