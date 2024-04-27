import { View, Text } from 'react-native';

import styles from './PageHeader.style';

const PageHeader = () => (
  <View style={styles.container}>
    <Text style={styles.title}>My tummy hurts</Text>
  </View>
);

export default PageHeader;
