import { View, Text, TouchableOpacity } from 'react-native';

import styles from './Pill.style';

interface PillProps {
  name: string;
  onPress: () => void;
}

const Pill = ({ name, onPress }: PillProps) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.leftSide} />

    <View style={styles.textContainer}>
      <Text style={styles.text}>{name}</Text>
    </View>

    <View style={styles.rightSide} />
  </TouchableOpacity>
);

export default Pill;
