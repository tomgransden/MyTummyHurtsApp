import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bfa2c8',
  },
  scrollViewContainer: { marginTop: 16, paddingBottom: 64 },
  empty: { textAlign: 'center', fontSize: 28, fontFamily: 'Rubik' },
  date: { marginLeft: 16, fontSize: 24 },
  chart: { marginLeft: -30, marginTop: 12 },
  keyContainer: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  key: { flexDirection: 'row', alignItems: 'center' },
  painKey: { height: 10, width: 10, borderRadius: 25, backgroundColor: 'red' },
  bowelKey: { height: 10, width: 10, borderRadius: 25, backgroundColor: 'brown' },
  keyTitle: { marginLeft: 8 },
  chartContainer: { height: 300 },
});

export default styles;
