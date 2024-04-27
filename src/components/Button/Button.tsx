import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

import styles from './Button.style';
import { IButtonProps } from './Button.type';

const Button = ({ label, onPress, loading }: IButtonProps) => (
  <TouchableOpacity
    accessibilityRole="button"
    style={styles.container}
    onPress={loading ? undefined : onPress}>
    {loading ? (
      <ActivityIndicator accessibilityLabel="Loading, please wait" color="white" />
    ) : (
      <Text style={styles.buttonText}>{label}</Text>
    )}
  </TouchableOpacity>
);

export default Button;
