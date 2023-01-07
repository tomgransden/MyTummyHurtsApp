import { StyleSheet } from 'react-native';

import { PageHeaderStyle } from './PageHeader.types';

const styles = StyleSheet.create<PageHeaderStyle>({
  container: {
    backgroundColor: 'mediumpurple',
    borderWidth: 1,
    borderColor: 'mediumpurple',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  title: { fontFamily: 'RubikBubbles-Regular', fontSize: 24, color: 'white' },
});

export default styles;
