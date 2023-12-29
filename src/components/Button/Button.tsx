import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './Button.style';
import { IButtonProps } from './Button.type';

const Button = ({ title, onPress }: IButtonProps) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

export default Button;
