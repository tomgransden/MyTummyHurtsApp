import { Text } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

import styles from './CentreCircle.style';

const CentreCircle = () => (
  <Animated.View entering={FadeIn} style={styles.centerCircle}>
    <Text style={styles.centreCircleText}>Choose an entry to log</Text>
  </Animated.View>
);

export default CentreCircle;
