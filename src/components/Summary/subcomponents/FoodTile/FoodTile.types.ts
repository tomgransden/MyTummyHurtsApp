import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

import { FoodDataPoint } from '../../Summary.types';

export type FoodTileStyle = {
  container: ViewStyle;
  titleContainer: ViewStyle;
  timeContainer: ViewStyle;
  titleText: TextStyle;
  contentContainer: ViewStyle;
  image: ImageStyle;
  description: TextStyle;
};

export type FoodTileProps = {
  item: FoodDataPoint;
};
