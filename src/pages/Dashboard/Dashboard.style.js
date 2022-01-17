import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fontSizes from '../../styles/fontSizes';
import radius from '../../styles/radius';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
  },
  welcomeView: {
    padding: spacing.normal,
    backgroundColor: colors.themeColor,
    marginTop: spacing.small,
    borderRadius: radius.big,
    alignItems: 'center',
    width: Dimensions.get('window').width / 1.1,
  },
  welcomeText: {
    fontSize: fontSizes.title,
    fontWeight: 'bold',
    color: colors.textColor,
  },
  buttonView: {
    width: '95%',
  },
  logoutIcon: {
    margin: spacing.small,
  },
});
