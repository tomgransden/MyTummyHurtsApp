import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    minHeight: 56,
    marginHorizontal: 16,
    paddingBottom: 16,
    marginTop: 16,
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
  contentContainer: {
    marginHorizontal: 16,
    flexDirection: 'row',
    marginTop: 16,
  },
  description: { marginLeft: 16, fontFamily: 'Rubik', flex: 1, flexWrap: 'wrap' },
  painScoreContainer: {
    height: 60,
    width: 60,
    backgroundColor: 'mediumpurple',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  painScore: { fontSize: 24, color: 'white', fontWeight: 'bold' },
  notes: { fontFamily: 'Rubik-Bold' },
});

export default styles;
