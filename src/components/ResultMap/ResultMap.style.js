import {Dimensions, StyleSheet} from 'react-native';

export default {
  default: StyleSheet.create({
    map: {
      height: Dimensions.get('window').height / 3,
      width: '100%',
    },
  }),

  bigMap: StyleSheet.create({
    map: {
      height: Dimensions.get('window').height / 2.3,
      width: '100%',
    },
  }),
};
