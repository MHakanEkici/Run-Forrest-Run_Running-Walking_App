import React from 'react';
import {View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TimeText from '../../TimeText';
import ValueItem from '../ValueItem';
import styles from './ActivityCard.style';

export default function ActivityCard(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <ValueItem
          itemLabel={'Meters'}
          itemValue={props.distance}
          type="bigSize"
        />
        <ValueItem
          itemLabel={<Icon name="timer-outline" size={35} />}
          itemValue={<TimeText time={props.time} />}
          type="bigSize"
        />
      </View>
      <View style={styles.rowContainer}>
        <ValueItem
          itemLabel={<Icon name="weather-windy" size={30} />}
          itemValue={props.weatherInfo.wind.speed}
        />
        <ValueItem
          itemLabel={<Icon name="thermometer" size={30} />}
          itemValue={props.weatherInfo.main.temp.toFixed(0) - 273 + '°C'}
        />
        <Image
          style={styles.weatherIcon}
          source={{
            uri: `http://openweathermap.org/img/wn/${props.weatherInfo.weather[0].icon}@2x.png`,
          }}
        />
      </View>
    </View>
  );
}
