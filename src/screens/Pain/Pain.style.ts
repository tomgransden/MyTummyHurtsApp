import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  painTitle: { marginVertical: 24, fontSize: 24, textAlign: 'center', fontFamily: 'Rubik' },
  slider: { marginHorizontal: 24 },
  painsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 32,
    marginBottom: 24,
  },
  painScore: { fontSize: 18 },
  input: {
    color: 'gray',
    marginHorizontal: 16,
    marginBottom: 32,
    padding: 16,
    height: 140,
    borderColor: 'mediumpurple',
    borderWidth: 1,
    fontSize: 16,
  },
});
