import { Dimensions } from "react-native";

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 852;

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("screen");

const horizontalScale = (size: number) => (SCREEN_WIDTH / guidelineBaseWidth) * size;

const verticalScale = (size: number) =>
  (SCREEN_HEIGHT / guidelineBaseHeight) * size;

  const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

export { horizontalScale, verticalScale, moderateScale, SCREEN_WIDTH, SCREEN_HEIGHT };
