import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: { fontSize: 16 },
  bold: { fontWeight: 'bold' },
  image: { width: '100%', height: 300 },
  scores: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 11,
    marginBottom: 24,
  },
  scoreText: { fontSize: 18 },
});
