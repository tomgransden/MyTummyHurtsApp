import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './FoodTile.style';
import { IFoodTileProps } from './FoodTile.type';
import { IRecordType } from '../../Summary.types';

const FoodTile = ({ item }: IFoodTileProps) => {
  const navigation = useNavigation();

  const openZoomer = () => {
    navigation.navigate('ImageZoomer', { url: item.metadata.image });
  };

  return (
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
        {item.metadata.image ? (
          <TouchableOpacity onPress={openZoomer}>
            <Image source={{ uri: item?.metadata?.image }} style={styles.image} />
          </TouchableOpacity>
        ) : (
          <MaterialCommunityIcons color="mediumpurple" size={60} name="food-apple" />
        )}
        <Text style={styles.description}>{item.metadata.description}</Text>
      </View>
    </View>
  );
};

export default FoodTile;
