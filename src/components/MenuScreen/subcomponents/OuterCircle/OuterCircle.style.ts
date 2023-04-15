import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface OuterCircleStyle {
  outerCircleContainer: ViewStyle;
  outerCircleText: TextStyle;
}

const styles = StyleSheet.create<OuterCircleStyle>({
  outerCircleContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: 'absolute',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerCircleText: {
    fontFamily: 'RubikBubbles-Regular',
    textAlign: 'center',
  },
});

export default styles;
