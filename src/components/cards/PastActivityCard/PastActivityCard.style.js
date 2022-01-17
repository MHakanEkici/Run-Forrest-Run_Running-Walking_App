import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import fontSizes from '../../../styles/fontSizes';
import radius from '../../../styles/radius';
import spacing from '../../../styles/spacing';

export default StyleSheet.create({
  itemContainer: {
    marginVertical: spacing.biggest,
    alignItems: 'center',
  },
  dateView: {
    alignItems: 'center',
    padding: spacing.micro,
    borderWidth: 2,
    borderColor: 'white',
    borderBottomWidth: 0,
    backgroundColor: 'white',
    width: '50%',
    borderTopRightRadius: radius.normal,
    borderTopLeftRadius: radius.normal,
  },
  date: {
    color: colors.themeStaticIndigo,
    fontSize: fontSizes.big,
  },
  valuesView: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
    borderTopRightRadius: radius.normal,
    borderTopLeftRadius: radius.normal,
    padding: spacing.small,
    backgroundColor: colors.themeColor,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  valueSeperator: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: radius.normal,
    height: '100%',
  },
  detailsButton: {
    alignItems: 'center',
    padding: spacing.small,
    borderWidth: 2,
    borderColor: 'white',
    borderBottomWidth: 0,
    backgroundColor: 'white',
    width: '90%',
    borderBottomRightRadius: radius.normal,
    borderBottomLeftRadius: radius.normal,
  },
  buttonView: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: colors.themeStaticIndigo,
    fontSize: fontSizes.big,
  },
});
