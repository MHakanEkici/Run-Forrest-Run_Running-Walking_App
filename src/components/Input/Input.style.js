import {StyleSheet} from 'react-native';
import spacing from '../../styles/spacing';
import radius from '../../styles/radius';
import fontSizes from '../../styles/fontSizes';

export default StyleSheet.create({
  container: {
    margin: spacing.tiny,
    padding: spacing.tiny,
  },
  inputContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    padding: spacing.tiny,
    borderRadius: radius.small,
  },
  label: {
    fontWeight: 'bold',
    fontSize: fontSizes.normal,
  },
  input: {
    padding: spacing.tiny,
  },
});
