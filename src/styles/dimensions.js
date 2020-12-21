import {Dimensions, PixelRatio} from 'react-native';


const WINDOW_WIDTH = Dimensions.get('window').width;
const guidelineBaseWidth = 320;

 const scaleSize = size => (WINDOW_WIDTH/guidelineBaseWidth) * size;

 const scaleFont = size => size * PixelRatio.getFontScale();

const widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  // Convert string input to decimal number
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};
const heightPercentageToDP = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent);
return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};


export {
  widthPercentageToDP,
  heightPercentageToDP,
  scaleFont,scaleSize
};