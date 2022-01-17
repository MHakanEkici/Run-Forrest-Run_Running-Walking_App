import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Dashboard from '../../pages/Dashboard';
import Leaderboard from '../../pages/Leaderboard';
import PastActivities from '../../pages/PastActivities';
import routes from '../routes';

export default function MainTab() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#4563bf',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: '#633f89',
        },
      }}>
      <Tab.Screen
        name={routes.DASHBOARD_PAGE}
        component={Dashboard}
        options={{
          tabBarIcon: ({...rest}) => <Icon name="view-dashboard" {...rest} />,
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#293c91',
          },
        }}
      />
      <Tab.Screen
        name={routes.PAST_ACTIVITIES_PAGE}
        component={PastActivities}
        options={{
          tabBarIcon: ({...rest}) => <Icon name="wrap" {...rest} />,
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#293c91',
          },
        }}
      />
      <Tab.Screen
        name={routes.LEADERBOARD_PAGE}
        component={Leaderboard}
        options={{
          tabBarIcon: ({...rest}) => <Icon name="trophy-outline" {...rest} />,
          headerTitleAlign: 'center',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
