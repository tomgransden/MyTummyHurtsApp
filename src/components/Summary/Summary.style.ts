import { StyleSheet, ViewStyle } from 'react-native';

type SummaryStyle = {
  container: ViewStyle;
  scrollViewContainer: ViewStyle;
};

const styles = StyleSheet.create<SummaryStyle>({
  container: {
    flex: 1,
    backgroundColor: '#bfa2c8',
  },
  scrollViewContainer: { marginTop: 16 },
});

export default styles;
