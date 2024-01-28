import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
  touchable: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    borderRadius: 50,
  },
});

export default styles;
