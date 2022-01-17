import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import fontSizes from '../../../styles/fontSizes';
import radius from '../../../styles/radius';
import spacing from '../../../styles/spacing';

export default StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    padding: spacing.small,
    backgroundColor: colors.themeColor,
    borderRadius: radius.big,
    width: Dimensions.get('window').width / 1.1,
  },
  labelContainer: {
    alignItems: 'center',
  },
  label: {
    fontSize: fontSizes.title,
    fontWeight: 'bold',
    color: 'white',
  },
  itemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
