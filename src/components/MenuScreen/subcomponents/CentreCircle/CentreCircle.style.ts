import { TextStyle, ViewStyle, StyleSheet } from 'react-native';

interface CentreCircleStyle {
  centerCircle: ViewStyle;
  centreCircleText: TextStyle;
}

const styles = StyleSheet.create<CentreCircleStyle>({
  centerCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    height: 160,
    width: 160,
    borderRadius: 80,
  },
  centreCircleText: {
    fontFamily: 'RubikBubbles-Regular',
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
});

export default styles;
