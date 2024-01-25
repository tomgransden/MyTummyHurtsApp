import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

import styles from './Button.style';
import { IButtonProps } from './Button.type';

const Button = ({ title, onPress, loading }: IButtonProps) => (
  <TouchableOpacity style={styles.container} onPress={loading ? undefined : onPress}>
    {loading ? <ActivityIndicator color="white" /> : <Text style={styles.buttonText}>{title}</Text>}
  </TouchableOpacity>
);

export default Button;
