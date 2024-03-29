import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: 180,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 35,
    borderWidth: 1,
    margin: 4,
  },
  leftSide: {
    backgroundColor: 'lightgray',
    width: '50%',
    height: 68,
    borderBottomLeftRadius: 34,
    borderTopLeftRadius: 34,
    zIndex: 0,
    borderRightWidth: 0,
  },
  textContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  text: { fontWeight: 'bold' },
  rightSide: {
    backgroundColor: 'lightblue',
    height: 68,
    width: '50%',
    borderBottomRightRadius: 35,
    borderTopRightRadius: 35,
    zIndex: 0,
  },
});

export default styles;
