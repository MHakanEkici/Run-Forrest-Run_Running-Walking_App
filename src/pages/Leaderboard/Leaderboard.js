import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import useFetchData from '../../hooks/useFetchData';
import useUsers from '../../hooks/useUsers';
import styles from './Leaderboard.style';

export default function Leaderboard() {
  const [userDistanceMap, setUserDistanceMap] = useState([]);

  const {data} = useFetchData('activities/');
  const {userList} = useUsers();

  useEffect(() => {
    if (!!data && !!userList) {
      let sortedUserDistanceMap = [];

      const parsedActivityData = Object.keys(data).map(key => ({
        id: key,
        value: data[key],
      }));

      parsedActivityData.map(activitiyMap => {
        let totalDistance = 0;
        let userId = activitiyMap.id;
        let userName = '';

        const activitiyMapValueArr = Object.keys(activitiyMap.value).map(
          key => ({
            ...activitiyMap.value[key],
          }),
        );

        activitiyMapValueArr.map(activity => {
          totalDistance = totalDistance + parseInt(activity.distance);
        });

        userList.map(user => {
          if (user.id === userId) {
            const userValueArr = Object.keys(user.value).map(key => ({
              ...user.value[key],
            }));

            userValueArr.map(userItem => {
              userName = userItem.displayName;
            });
          }
        });

        sortedUserDistanceMap.push({
          userId: userId,
          userName: userName,
          totalDistance: totalDistance,
        });
      });

      sortedUserDistanceMap = sortedUserDistanceMap.sort(
        (a, b) => b.totalDistance - a.totalDistance,
      );
      setUserDistanceMap(sortedUserDistanceMap);
    }
  }, [data, userList]);

  const renderActivities = ({item, index}) => (
    <View style={styles.userView}>
      {index + 1 === 1 ? (
        <Icon name="crown" size={45} color={'#FFDF00'} />
      ) : null}
      {index + 1 === 2 ? (
        <Icon name="crown" size={40} color={'#C0C0C0'} />
      ) : null}
      {index + 1 === 3 ? (
        <Icon name="crown" size={40} color={'#CD7F32'} />
      ) : null}
      {index + 1 > 3 ? (
        <Text style={styles.userInfo}> #{index + 1}</Text>
      ) : null}
      <Text style={styles.userInfo}>{item.userName}</Text>
      <Text style={styles.userInfo}>{item.totalDistance}</Text>
    </View>
  );

  return (
    <LinearGradient colors={['#4568dc', '#b06ab3']} style={styles.container}>
      <View style={styles.topBarContainer}>
        <Text style={styles.topBarInfo}>Rank</Text>
        <Text style={styles.topBarInfo}>Name</Text>
        <Text style={styles.topBarInfo}>Distance</Text>
      </View>
      <FlatList
        data={userDistanceMap}
        renderItem={renderActivities}
        keyExtractor={(item, index) => index.toString()}
      />
    </LinearGradient>
  );
}
