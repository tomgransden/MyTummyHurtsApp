import { StyleSheet, ViewStyle } from 'react-native';

interface MedicationScreenStyle {
  container: ViewStyle;
  pillList: ViewStyle;
}

const styles = StyleSheet.create<MedicationScreenStyle>({
  container: {
    flex: 1,
    backgroundColor: '#bfa2c8',
  },
  pillList: { flexDirection: 'row', flexWrap: 'wrap' },
});

export default styles;
