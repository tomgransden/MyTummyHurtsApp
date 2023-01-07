import { TextStyle, ViewStyle } from 'react-native';

export type PageHeaderStyle = {
  container: ViewStyle;
  title: TextStyle;
};

export type PageHeaderProps = {
  title: string;
};
