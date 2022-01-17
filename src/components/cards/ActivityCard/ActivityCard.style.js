import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import radius from '../../../styles/radius';
import spacing from '../../../styles/spacing';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    marginBottom: spacing.big,
    padding: spacing.small,
    backgroundColor: colors.themeColor,
    borderRadius: radius.big,
    width: Dimensions.get('window').width / 1.1,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  weatherIcon: {
    width: 90,
    height: 90,
  },
});
