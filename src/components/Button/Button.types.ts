import { TextStyle, ViewStyle } from 'react-native';

export type ButtonProps = {
  title: string;
  onPress: () => void;
};

export type ButtonStyle = {
  container: ViewStyle;
  buttonText: TextStyle;
};
