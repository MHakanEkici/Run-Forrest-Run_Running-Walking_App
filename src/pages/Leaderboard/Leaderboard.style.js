import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fontSizes from '../../styles/fontSizes';
import radius from '../../styles/radius';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  userView: {
    padding: spacing.normal,
    backgroundColor: colors.themeColor,
    marginTop: spacing.normal,
    borderRadius: radius.big,
    alignItems: 'center',
    width: Dimensions.get('window').width / 1.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userInfo: {
    fontSize: fontSizes.big,
    fontWeight: 'bold',
    color: colors.textColor,
  },
  topBarContainer: {
    backgroundColor: colors.themeStaticIndigo,
    width: '100%',
    height: Dimensions.get('window').height / 7,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: spacing.normal,
    borderBottomWidth: 2,
    borderColor: 'white',
  },
  topBarInfo: {
    fontSize: fontSizes.huge,
    fontWeight: 'bold',
    color: colors.textColor,
  },
});
