import {Dimensions, PixelRatio, StatusBar} from 'react-native';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const widthPercentageToDP = (widthPercent) => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const heightPercentageToDP = (heightPercent) => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

const listenOrientationChange = (that) => {
  Dimensions.addEventListener('change', (newDimensions) => {
    screenWidth = newDimensions.window.width;
    screenHeight = newDimensions.window.height;
    that.setState({
      orientation: screenWidth < screenHeight ? 'portrait' : 'landscape',
    });
  });
};

const removeOrientationListener = () => {
  Dimensions.removeEventListener('change', () => {});
};

const standardLength =
  screenWidth > screenHeight
    ? screenWidth
    : screenHeight > 750
    ? screenHeight - screenHeight * 0.15
    : screenHeight;
const offset =
  screenWidth > screenHeight
    ? 0
    : Platform.OS === 'ios'
    ? 78
    : StatusBar.currentHeight; // iPhone X style SafeAreaView size in portrait

const deviceHeight =
  Platform.OS === 'android' ? standardLength - offset : standardLength;

function RFPercentage(percent) {
  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
}

function RFValue(fontSize, standardScreenHeight = 680) {
  const heightPercent = (fontSize * deviceHeight) / screenHeight;
  return Math.round(heightPercent);
}

export {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange,
  removeOrientationListener,
  RFPercentage as fp,
};
