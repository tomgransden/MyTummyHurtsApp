import { View, Text } from 'react-native';
import styles from './Pill.style';

interface PillProps {
  name: string;
}

const Pill = ({ name }: PillProps) => (
  <View style={styles.container}>
    <View style={styles.leftSide} />

    <View style={styles.textContainer}>
      <Text style={styles.text}>{name}</Text>
    </View>

    <View style={styles.rightSide} />
  </View>
);

export default Pill;
