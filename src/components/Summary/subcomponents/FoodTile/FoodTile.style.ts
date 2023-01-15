import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

type FoodTileStyle = {
  container: ViewStyle;
  titleContainer: ViewStyle;
  timeContainer: ViewStyle;
  titleText: TextStyle;
  contentContainer: ViewStyle;
  image: ImageStyle;
  description: TextStyle;
};

const styles = StyleSheet.create<FoodTileStyle>({
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
  image: { width: 60, height: 60, resizeMode: 'cover' },
  description: { marginLeft: 16, fontFamily: 'Rubik', flex: 1, flexWrap: 'wrap' },
});

export default styles;
