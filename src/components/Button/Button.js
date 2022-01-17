import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './Button.style';

export default function Button({label, type = 'primary', ...otherProps}) {
  return (
    <TouchableOpacity style={styles[type].container} {...otherProps}>
      <Text style={styles[type].label}>{label}</Text>
    </TouchableOpacity>
  );
}
