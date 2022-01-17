import React from 'react';
import {View, Text} from 'react-native';
import TotalInfoCardItem from './TotalInfoCardItem';
import styles from './TotalInfoCard.style';
import TimeText from '../../TimeText';

export default function TotalInfoCard({
  totalDistance,
  totalTime,
  activityCount,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Your Stats</Text>
      </View>
      <View style={styles.itemsContainer}>
        <TotalInfoCardItem
          itemLabel={'Total Distance'}
          itemValue={totalDistance}
        />
        <TotalInfoCardItem
          itemLabel={'Total Time'}
          itemValue={<TimeText time={totalTime} />}
        />
      </View>
      <TotalInfoCardItem
        itemLabel={'Activity Count'}
        itemValue={activityCount}
      />
    </View>
  );
}
