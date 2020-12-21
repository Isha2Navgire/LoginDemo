import {StyleSheet} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from './dimensions';
import {colors} from './index';
import { SCALE_12, SCALE_4, SCALE_8 } from './spacing';
import { FONT_FAMILY_BOLD, FONT_FAMILY_REGULAR, FONT_SIZE_12, FONT_WEIGHT_BOLD } from './typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.WHITE,
  },
  input_view: {
    flex: 0.1,
  },
  divider_style:{
    height:3,
    backgroundColor:colors.ALERT,
    margin:SCALE_4
  },
  input_border:{
    flexDirection:'row',
    width: widthPercentageToDP('70%'),
    height: heightPercentageToDP('6%'),
    borderRadius: 25,
    borderColor: colors.SECONDARY,
    backgroundColor: colors.GRAY_LIGHT,
    marginBottom:SCALE_12
  },
  password_input:{
    fontSize: FONT_SIZE_12,
    fontFamily: FONT_FAMILY_REGULAR,
    fontWeight: FONT_WEIGHT_BOLD,
    width: widthPercentageToDP('60%'),
    height: heightPercentageToDP('6%'),
    padding:SCALE_8
  }
});

export default styles;
