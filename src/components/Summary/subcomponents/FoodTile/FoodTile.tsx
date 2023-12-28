import dayjs from 'dayjs';
import { View, Text, Image } from 'react-native';

import styles from './FoodTile.style';
import { FoodDataPoint, RecordType } from '../../Summary.types';

interface FoodTileProps {
  item: FoodDataPoint;
}

const FoodTile = ({ item }: FoodTileProps) => (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      <View style={styles.timeContainer}>
        <Text style={styles.titleText}>{dayjs(item.createdDate).format('hh:mma')}</Text>
      </View>
      <Text> - </Text>
      <View style={styles.timeContainer}>
        <Text style={styles.titleText}>{RecordType[item.type]}</Text>
      </View>
    </View>
    <View style={styles.contentContainer}>
      <Image source={{ uri: item?.metadata?.image }} style={styles.image} />
      <Text style={styles.description}>{item.metadata.description}</Text>
    </View>
  </View>
);

export default FoodTile;
