import { StyleSheet } from "react-native"
import { FONT_FAMILY_BOLD, FONT_FAMILY_REGULAR, FONT_SIZE_12, FONT_SIZE_14, FONT_SIZE_16, FONT_SIZE_20, FONT_WEIGHT_BOLD, FONT_WEIGHT_REGULAR, LINE_HEIGHT_16, LINE_HEIGHT_20, LINE_HEIGHT_24 } from "../../styles/typography";
import {colors} from '../../styles/index';
import { SCALE_4, SCALE_8 } from "../../styles/spacing";

const styles = StyleSheet.create({
header:{
    fontSize:FONT_SIZE_20,
    fontFamily:FONT_FAMILY_BOLD,
    lineHeight:LINE_HEIGHT_24,
    fontWeight:FONT_WEIGHT_BOLD,
},
subheader:{
    fontSize:FONT_SIZE_16,
    fontFamily:FONT_FAMILY_REGULAR,
    lineHeight:LINE_HEIGHT_20,
    fontWeight:FONT_WEIGHT_BOLD
},
normaltext:{
    fontSize:FONT_SIZE_12,
    fontFamily:FONT_FAMILY_REGULAR,
    lineHeight:LINE_HEIGHT_16,
    fontWeight:FONT_WEIGHT_REGULAR,
    padding:SCALE_8
},
error:{
    fontSize:FONT_SIZE_12,
    fontFamily:FONT_FAMILY_REGULAR,
    lineHeight:LINE_HEIGHT_16,
    fontWeight:FONT_WEIGHT_BOLD,
    color:colors.ALERT,
    padding:SCALE_4
}
});

export default styles;