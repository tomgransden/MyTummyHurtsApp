import { StyleSheet } from 'react-native';

import { ButtonStyle } from './Button.types';

const styles = StyleSheet.create<ButtonStyle>({
  container: {
    width: 160,
    alignSelf: 'center',
    backgroundColor: 'mediumpurple',
    borderWidth: 1,
    borderColor: 'mediumpurple',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  buttonText: {
    fontFamily: 'RubikBubbles-Regular',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});

export default styles;
