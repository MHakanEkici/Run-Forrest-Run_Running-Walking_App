import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './PastActivityCard.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ValueItem from '../ValueItem';
import TimeText from '../../TimeText';
import colors from '../../../styles/colors';

export default function PastActivityCard({
  activityDate,
  activityTime,
  activityDistance,
  onButtonPress,
}) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.dateView}>
        <Text style={styles.date}>
          {(activityDate = new Date().toDateString())}
        </Text>
      </View>
      <View style={styles.valuesView}>
        <ValueItem
          itemLabel={'Meters'}
          itemValue={activityDistance}
          type="secondary"
        />
        <View style={styles.valueSeperator} />
        <ValueItem
          itemLabel={<Icon name="timer-outline" size={30} />}
          itemValue={<TimeText time={activityTime} />}
          type="secondary"
        />
      </View>
      <TouchableOpacity
        style={styles.detailsButton}
        onPress={() => onButtonPress()}>
        <View style={styles.buttonView}>
          <Text style={styles.buttonText}>Details </Text>
          <Icon name="arrow-right" size={25} color={colors.themeStaticIndigo} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
