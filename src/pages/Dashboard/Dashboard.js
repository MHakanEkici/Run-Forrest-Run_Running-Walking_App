import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import routes from '../../navigation/routes';
import auth from '@react-native-firebase/auth';
import Button from '../../components/Button';
import Toast from 'react-native-toast-message';
import TotalInfoCard from '../../components/cards/TotalInfoCard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import useFetchData from '../../hooks/useFetchData';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Dashboard.style';

export default function Dashboard({navigation}) {
  const [totalDistance, setTotalDistance] = useState(0);
  const [totalTime, setTotalTime] = useState({second: 0, minute: 0});
  const [activityCount, setActivityCount] = useState(0);

  const {data} = useFetchData(`activities/${auth().currentUser.uid}`);

  useEffect(() => {
    if (!!data) {
      let distance = 0;
      let timeInSecond = 0;
      let time = {second: 0, minute: 0};

      const parsedActivityData = Object.keys(data).map(key => ({
        ...data[key],
      }));

      parsedActivityData.map(activity => {
        distance = distance + parseInt(activity.distance);
        timeInSecond =
          timeInSecond + activity.time.minute * 60 + activity.time.second;
      });

      time.minute = Math.floor(timeInSecond / 60);
      time.second = timeInSecond % 60;

      setTotalTime(time);
      setTotalDistance(distance);
      setActivityCount(parsedActivityData.length);
    }
  }, [data]);

  function handleSignOut() {
    auth()
      .signOut()
      .then(() => {
        Toast.show({
          type: 'info',
          text1: 'Signed Out',
        });
      })
      .catch(error => {
        Toast.show({
          type: 'error',
          text1: 'Signed Out Failed',
        });
        console.log(error);
      });
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          style={styles.logoutIcon}
          name="logout"
          size={35}
          onPress={() => handleSignOut()}
        />
      ),
    });
  }, [navigation]);

  function navigateToNewActivity() {
    navigation.navigate(routes.NEW_ACTIVITY_PAGE);
  }

  return (
    <LinearGradient colors={['#4568dc', '#b06ab3']} style={styles.container}>
      <View style={styles.welcomeView}>
        <Text style={styles.welcomeText}>
          Welcome {auth().currentUser.displayName}
        </Text>
      </View>
      <TotalInfoCard
        totalDistance={totalDistance}
        totalTime={totalTime}
        activityCount={activityCount}
      />
      <View style={styles.buttonView}>
        <Button
          label={'Start An Activity'}
          onPress={navigateToNewActivity}
          type="transparent"
        />
      </View>
    </LinearGradient>
  );
}
