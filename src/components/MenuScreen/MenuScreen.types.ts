import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TextStyle, ViewStyle } from 'react-native';

import { RootStackParamList } from '../../../App';

export type MenuScreenProps = NativeStackScreenProps<RootStackParamList, 'MainMenu'>;

export type MenuScreenStyle = {
  container: ViewStyle;
  circleContainer: ViewStyle;
  centerCircle: ViewStyle;
  centreCircleText: TextStyle;
  outerCircleContainer: ViewStyle;
  outerCircleText: TextStyle;
};

export type MenuOption = {
  title: string;
  pageToNavigateTo: keyof RootStackParamList;
};
