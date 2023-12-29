import dayjs from 'dayjs';
import { View, Text } from 'react-native';

import styles from './MedicationTile.style';
import { IMedicationTileProps } from './MedicationTile.type';
import { IRecordType } from '../../Summary.types';

const MedicationTile = ({ item }: IMedicationTileProps) => (
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
    <View style={styles.medicationsContainer}>
      {item.metadata.medications.map((medication, index) => (
        <View key={`medication-${index}`} style={styles.medicationContainer}>
          <Text style={styles.medicationText}>{medication}</Text>
        </View>
      ))}
    </View>
  </View>
);

export default MedicationTile;
