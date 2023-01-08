import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './Button.style';
import { ButtonProps } from './Button.types';

const Button = ({ title, onPress }: ButtonProps): JSX.Element => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

export default Button;
