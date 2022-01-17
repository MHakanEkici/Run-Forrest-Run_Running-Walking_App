import {StyleSheet} from 'react-native';
import spacing from '../../styles/spacing';
import fontSizes from '../../styles/fontSizes';
import colors from '../../styles/colors';
import radius from '../../styles/radius';

const base_style = StyleSheet.create({
  container: {
    margin: spacing.tiny,
    padding: spacing.normal,
    borderRadius: radius.normal,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: fontSizes.huge,
    fontWeight: 'bold',
    color: colors.textColor,
  },
});

export default {
  primary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: colors.themeColor,
    },
  }),

  primaryNegative: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: 'rgba(180, 0, 0, 0.3)',
      borderWidth: 1,
      borderColor: 'white',
    },
  }),

  secondary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      borderWidth: 1.5,
      borderColor: 'white',
    },
    label: {
      ...base_style.label,
      color: 'white',
    },
  }),

  secondaryTheme: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      borderWidth: 2,
      borderColor: colors.themeColor,
    },
    label: {
      ...base_style.label,
      color: colors.themeColor,
    },
  }),

  transparent: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: 'rgba(0, 0, 70, 0.4)',
      borderWidth: 1,
      borderColor: 'white',
    },
  }),

  transparentBorderless: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: 'rgba(0, 0, 70, 0.4)',
    },
  }),
};
