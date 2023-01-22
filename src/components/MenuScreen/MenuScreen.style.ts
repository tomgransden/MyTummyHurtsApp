import { StyleSheet, ViewStyle } from 'react-native';

type MenuScreenStyle = {
  container: ViewStyle;
  circleContainer: ViewStyle;
};

const styles = StyleSheet.create<MenuScreenStyle>({
  container: {
    flex: 1,
    backgroundColor: '#bfa2c8',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 120,
  },
});

export default styles;
