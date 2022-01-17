import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import spacing from '../../../styles/spacing';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  mapFrame: {
    borderBottomColor: colors.themeColor,
    borderBottomWidth: 5,
    borderTopColor: colors.themeColor,
    borderTopWidth: 5,
  },
  map: {
    height: Dimensions.get('window').height / 2.5,
    width: '100%',
  },
  cardView: {
    flex: 1,
    alignItems: 'center',
    marginTop: spacing.big,
  },
  buttonView: {
    marginBottom: spacing.normal,
    marginHorizontal: spacing.normal,
  },
});
