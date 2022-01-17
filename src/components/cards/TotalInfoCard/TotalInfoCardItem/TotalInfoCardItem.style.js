import {StyleSheet} from 'react-native';
import colors from '../../../../styles/colors';
import fontSizes from '../../../../styles/fontSizes';
import radius from '../../../../styles/radius';
import spacing from '../../../../styles/spacing';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: spacing.normal,
  },
  valueFrame: {
    padding: spacing.large,
    borderRadius: radius.normal,
    minWidth: 100,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: colors.themeColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.micro,
  },
  label: {
    fontSize: fontSizes.big,
    color: colors.textColor,
  },
  value: {
    fontSize: fontSizes.huge,
    fontWeight: 'bold',
    color: colors.textColor,
  },
});
