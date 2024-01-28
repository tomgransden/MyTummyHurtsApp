import { MaterialCommunityIcons } from '@expo/vector-icons';
import dayjs from 'dayjs';
import { View, Text } from 'react-native';

import styles from './MoodTile.style';
import { IMoodDataPoint, IRecordType } from '../../Summary.types';

const MoodTile = ({ item }: { item: IMoodDataPoint }) => (
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
      <MaterialCommunityIcons color="mediumpurple" size={60} name={item.metadata.moodIcon} />
      <Text style={styles.description}>
        You recorded that you felt <Text style={styles.bold}>{item.metadata.mood}</Text>
      </Text>
    </View>
  </View>
);

export default MoodTile;
