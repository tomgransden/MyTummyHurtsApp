import { View, Text, TouchableOpacity } from 'react-native';

import styles from './Pill.style';
import { IPillProps } from './Pill.type';

const Pill = ({ name, onPress }: IPillProps) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.leftSide} />

    <View style={styles.textContainer}>
      <Text style={styles.text}>{name}</Text>
    </View>

    <View style={styles.rightSide} />
  </TouchableOpacity>
);

export default Pill;
