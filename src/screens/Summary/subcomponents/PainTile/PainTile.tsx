import dayjs from 'dayjs';
import { View, Text } from 'react-native';

import styles from './PainTile.style';
import { IPainDataPoint, IRecordType } from '../../Summary.types';

const PainTile = ({ item }: { item: IPainDataPoint }) => (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      <View style={styles.timeContainer}>
        <Text style={styles.titleText}>{dayjs(item.createdDate).format('hh:mma')}</Text>
      </View>
      <Text> - </Text>
      <View style={styles.timeContainer}>
        <Text style={styles.titleText}>{IRecordType[item.type]}</Text>
      </View>
    </View>
    <View style={styles.contentContainer}>
      <View style={styles.painScoreContainer}>
        <Text style={styles.painScore}>{item.metadata.painScore}</Text>
      </View>
      <View>
        <Text style={styles.description}>You recorded that you had pain</Text>

        <Text style={styles.description}>
          <Text style={styles.notes}>Notes:</Text> {item.metadata.painDescription}
        </Text>
      </View>
    </View>
  </View>
);

export default PainTile;
