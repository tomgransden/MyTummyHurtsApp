import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerIos: {
    height: 56,
    marginHorizontal: 16,
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerAndroid: {
    marginHorizontal: 16,
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: { fontSize: 20 },
  bold: { fontWeight: 'bold' },
  image: { width: '100%', height: 300 },
  scores: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginBottom: 24,
  },
  scoreText: { fontSize: 18 },
});
