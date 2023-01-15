import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type MenuScreenStyle = {
  container: ViewStyle;
  circleContainer: ViewStyle;
  centerCircle: ViewStyle;
  centreCircleText: TextStyle;
  outerCircleContainer: ViewStyle;
  outerCircleText: TextStyle;
};

const styles = StyleSheet.create<MenuScreenStyle>({
  container: {
    flex: 1,
    backgroundColor: '#bfa2c8',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 120,
  },
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
