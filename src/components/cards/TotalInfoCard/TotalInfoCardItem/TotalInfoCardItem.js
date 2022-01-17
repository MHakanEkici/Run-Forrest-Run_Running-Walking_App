import React from 'react';
import {View, Text} from 'react-native';
import styles from './TotalInfoCardItem.style';

export default function TotalInfoCardItem({itemLabel, itemValue}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{itemLabel}</Text>
      <View style={styles.valueFrame}>
        <Text style={styles.value}>{itemValue}</Text>
      </View>
    </View>
  );
}
