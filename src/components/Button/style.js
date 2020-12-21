import {StyleSheet} from 'react-native';
import {
  FONT_FAMILY_BOLD,
  FONT_SIZE_14,
  FONT_WEIGHT_BOLD,
} from '../../styles/typography';
import {colors} from '../../styles/index';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../styles/dimensions';

const styles = StyleSheet.create({
  btn_style: {
    width: widthPercentageToDP('70%'),
    height: heightPercentageToDP('6%'),
    borderRadius: 25,
    borderColor: colors.ALERT,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: colors.ALERT,
  },
  text_style:{
    color:colors.GRAY_LIGHT,
    fontWeight:FONT_WEIGHT_BOLD
  }
});

export default styles;
