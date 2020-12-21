import {StyleSheet} from 'react-native';
import {
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  FONT_SIZE_12,
  FONT_SIZE_14,
  FONT_WEIGHT_BOLD,
  FONT_WEIGHT_REGULAR,
} from '../../styles/typography';
import {colors} from '../../styles/index';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../styles/dimensions';
import {SCALE_8} from '../../styles/spacing';

const styles = StyleSheet.create({
  input: {
    fontSize: FONT_SIZE_12,
    fontFamily: FONT_FAMILY_BOLD,
    fontWeight: FONT_WEIGHT_BOLD,
    width: widthPercentageToDP('70%'),
    height: heightPercentageToDP('6%'),
    borderRadius: 25,
    borderColor: colors.SECONDARY,
    padding: SCALE_8,
    backgroundColor: colors.GRAY_LIGHT,
  },
});

export default styles;
