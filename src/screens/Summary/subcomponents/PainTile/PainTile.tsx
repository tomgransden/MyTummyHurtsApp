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
      <View
        style={{
          height: 60,
          width: 60,
          backgroundColor: 'mediumpurple',
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold' }}>
          {item.metadata.painScore}
        </Text>
      </View>
      <View>
        <Text style={styles.description}>You recorded that you had pain</Text>

        <Text style={styles.description}>
          <Text style={{ fontFamily: 'Rubik-Bold' }}>Notes:</Text> {item.metadata.painDescription}
        </Text>
      </View>
    </View>
  </View>
);

export default PainTile;
