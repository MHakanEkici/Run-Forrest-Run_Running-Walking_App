import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import fontSizes from '../../../styles/fontSizes';
import spacing from '../../../styles/spacing';

const base_style = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: spacing.normal,
  },
  label: {
    fontWeight: 'bold',
    color: colors.textColor,
    marginTop: spacing.micro,
  },
  value: {
    fontWeight: 'bold',
    color: colors.textColor,
  },
});

export default {
  default: StyleSheet.create({
    ...base_style,
    label: {
      ...base_style.label,
      fontSize: fontSizes.big,
    },
    value: {
      ...base_style.value,
      fontSize: fontSizes.title,
    },
  }),

  secondary: StyleSheet.create({
    ...base_style,
    label: {
      ...base_style.label,
      fontSize: fontSizes.normal,
    },
    value: {
      ...base_style.value,
      fontSize: fontSizes.huge,
      color: colors.textColor,
    },
  }),

  bigSize: StyleSheet.create({
    ...base_style,
    label: {
      ...base_style.label,
      fontSize: fontSizes.huge,
    },
    value: {
      ...base_style.value,
      fontSize: fontSizes.bigTitle,
    },
  }),
};
