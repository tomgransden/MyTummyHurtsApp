import dayjs from 'dayjs';
import { View, Text, Image } from 'react-native';

import styles from './FoodTile.style';
import { IFoodTileProps } from './FoodTile.type';
import { IRecordType } from '../../Summary.types';

const FoodTile = ({ item }: IFoodTileProps) => (
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
      <Image source={{ uri: item?.metadata?.image }} style={styles.image} />
      <Text style={styles.description}>{item.metadata.description}</Text>
    </View>
  </View>
);

export default FoodTile;
