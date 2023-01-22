import { View, Text } from 'react-native';

import styles from './CentreCircle.style';

const CentreCircle = (): JSX.Element => (
  <View style={styles.centerCircle}>
    <Text style={styles.centreCircleText}>Choose an entry to log</Text>
  </View>
);

export default CentreCircle;
