import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ViewStyle } from 'react-native';

import { RootStackParamList } from '../../../App';

export type MenuScreenProps = NativeStackScreenProps<RootStackParamList, 'MainMenu'>;

export type MenuScreenStyle = {
  container: ViewStyle;
  circleContainer: ViewStyle;
  centerCircle: ViewStyle;
};
