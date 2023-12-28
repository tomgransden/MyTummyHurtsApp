import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface MedicationScreenStyle {
  container: ViewStyle;
  pillList: ViewStyle;
  noMedications: TextStyle;
  sheetContainer: ViewStyle;
  sheetText: TextStyle;
  sheetInput: TextStyle;
}

const styles = StyleSheet.create<MedicationScreenStyle>({
  container: {
    flex: 1,
    backgroundColor: '#bfa2c8',
  },
  pillList: { flexDirection: 'row', flexWrap: 'wrap' },
  noMedications: { fontFamily: 'Rubik', fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
  sheetContainer: { marginHorizontal: 16 },
  sheetText: {
    fontSize: 24,
    fontFamily: 'Rubik',
    fontWeight: 'bold',
    color: 'mediumpurple',
  },
  sheetInput: { fontSize: 20, fontFamily: 'Rubik', marginTop: 12 },
});

export default styles;
