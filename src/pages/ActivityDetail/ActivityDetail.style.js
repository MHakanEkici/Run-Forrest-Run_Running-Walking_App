import {Dimensions, StyleSheet} from 'react-native';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: Dimensions.get('window').height / 2.4,
    width: '100%',
  },
  cardView: {
    flex: 1,
    alignItems: 'center',
    marginTop: spacing.big,
  },
});
