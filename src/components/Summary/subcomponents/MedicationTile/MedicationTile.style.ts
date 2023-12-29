import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    minHeight: 56,
    paddingBottom: 16,
    marginHorizontal: 16,
    borderWidth: 1,
    backgroundColor: 'white',
  },
  titleContainer: {
    flexDirection: 'row',
    marginTop: 8,
    paddingHorizontal: 16,
  },
  timeContainer: {
    backgroundColor: 'white',
    alignSelf: 'flex-start',
  },
  titleText: { fontSize: 16, fontFamily: 'Rubik' },
  medicationsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
  },
  medicationContainer: {
    borderWidth: 1,
    borderRadius: 32,
    marginRight: 12,
    marginTop: 12,
    minHeight: 24,
    padding: 8,
  },
  medicationText: { fontSize: 12 },
});

export default styles;
