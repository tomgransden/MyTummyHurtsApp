import { StyleSheet } from 'react-native';

import { MenuScreenStyle } from './MenuScreen.types';

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
  centerCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    height: 160,
    width: 160,
    borderRadius: 80,
  },
});

export default styles;
