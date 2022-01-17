import React from 'react';
import {View, Text} from 'react-native';
import styles from './ValueItem.style';

export default function ValueItem({itemLabel, itemValue, type = 'default'}) {
  return (
    <View style={styles[type].container}>
      <Text style={styles[type].value}>{itemValue}</Text>
      <Text style={styles[type].label}>{itemLabel}</Text>
    </View>
  );
}
