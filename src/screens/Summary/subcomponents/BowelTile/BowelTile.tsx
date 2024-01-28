import { MaterialCommunityIcons } from '@expo/vector-icons';
import dayjs from 'dayjs';
import { View, Text } from 'react-native';

import styles from './BowelTile.style';
import { IBowelDataPoint, IRecordType } from '../../Summary.types';

const BowelTile = ({ item }: { item: IBowelDataPoint }) => (
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
      <MaterialCommunityIcons color="brown" size={60} name={'emoticon-poop'} />
      <Text style={styles.description}>
        You recorded that you had a <Text style={styles.bold}>{item.metadata.bristolScore}</Text> on
        the Bristol Stool Chart
      </Text>
    </View>
  </View>
);

export default BowelTile;
