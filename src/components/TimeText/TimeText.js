import React from 'react';
import {Text} from 'react-native';

export default function TimeText({time}) {
  return (
    <Text>
      {time.minute >= 10 ? time.minute : '0' + time.minute}
      :
      {time.second >= 10 ? time.second : '0' + time.second}
    </Text>
  );
}
