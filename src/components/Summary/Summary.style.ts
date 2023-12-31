import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bfa2c8',
  },
  scrollViewContainer: { marginTop: 16, paddingBottom: 64 },
  loading: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#F5FCFF88',
  },
  empty: { textAlign: 'center', fontSize: 28, fontFamily: 'Rubik' },
  date: { marginLeft: 16, fontSize: 24 },
  chart: { marginLeft: -30, marginTop: 12 },
});

export default styles;
