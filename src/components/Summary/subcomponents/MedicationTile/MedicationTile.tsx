import dayjs from 'dayjs';
import { View, Text } from 'react-native';

import { MedicationDataPoint, RecordType } from '../../Summary.types';
import styles from './MedicationTile.style';

type MedicationTileProps = {
  item: MedicationDataPoint;
};

const MedicationTile = ({ item }: MedicationTileProps) => (
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
