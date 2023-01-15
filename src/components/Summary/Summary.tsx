import { SafeAreaView, ScrollView } from 'react-native';

import styles from './Summary.style';
import { RecordType, DataPoint } from './Summary.types';
import FoodTile from './subcomponents/FoodTile/FoodTile';
import MedicationTile from './subcomponents/MedicationTile/MedicationTile';

const exampleData: DataPoint[] = [
  {
    createdDate: new Date(2023, 1, 2, 3, 24, 0),
    type: RecordType.Medication,
    metadata: {
      medications: ['Buscopan 20mg', 'Ibuprofen 40mg', 'Paracetamol 100mg'],
    },
  },
  {
    createdDate: new Date(2023, 1, 2, 14, 24, 0),
    type: RecordType.Food,
    metadata: {
      image: 'https://img.kidspot.com.au/ykOJKEb7/kk/2019/08/greeneggs-and-ham-601642-1.jpg',
      description: 'Green eggs and some tasty ham from my fridge',
    },
  },
];

const renderItem = (item: DataPoint, index: number) => {
  switch (item.type) {
    case RecordType.Medication:
      return <MedicationTile item={item} key={index} />;
    case RecordType.Food:
      return <FoodTile item={item} key={index} />;
    default:
      return null;
  }
};

const Summary = (): JSX.Element => (
  <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      {exampleData.map((item, index) => renderItem(item, index))}
    </ScrollView>
  </SafeAreaView>
);

export default Summary;
