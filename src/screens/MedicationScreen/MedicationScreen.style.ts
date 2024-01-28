import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bfa2c8',
  },
  pillList: { flexDirection: 'row', flexWrap: 'wrap' },
  emptyText: { fontFamily: 'Rubik', fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
  bottomSheetContainer: { marginHorizontal: 16 },
  bottomSheetTitle: {
    fontSize: 24,
    fontFamily: 'Rubik',
    fontWeight: 'bold',
    color: 'mediumpurple',
  },
  bottomSheetTextInput: { fontSize: 20, fontFamily: 'Rubik', marginTop: 12 },
});

export default styles;
