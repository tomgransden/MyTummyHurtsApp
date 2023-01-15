import { StyleSheet } from 'react-native';

import { SummaryStyle } from './Summary.types';

const styles = StyleSheet.create<SummaryStyle>({
  container: {
    flex: 1,
    backgroundColor: '#bfa2c8',
  },
  scrollViewContainer: { marginTop: 16 },
});

export default styles;
