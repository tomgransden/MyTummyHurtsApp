import { SafeAreaView, ScrollView } from 'react-native';

import styles from './Summary.style';
import { IRecordType, IDataPoint } from './Summary.types';
import FoodTile from './subcomponents/FoodTile/FoodTile';
import MedicationTile from './subcomponents/MedicationTile/MedicationTile';

const exampleData: IDataPoint[] = [
  {
    createdDate: new Date(2023, 1, 2, 3, 24, 0),
    type: IRecordType.Medication,
    metadata: {
      medications: ['Buscopan 20mg', 'Ibuprofen 40mg', 'Paracetamol 100mg'],
    },
  },
  {
    createdDate: new Date(2023, 1, 2, 14, 24, 0),
    type: IRecordType.Food,
    metadata: {
      image: 'https://img.kidspot.com.au/ykOJKEb7/kk/2019/08/greeneggs-and-ham-601642-1.jpg',
      description: 'Green eggs and some tasty ham from my fridge',
    },
  },
];

const renderItem = (item: IDataPoint, index: number) => {
  switch (item.type) {
    case IRecordType.Medication:
      return <MedicationTile item={item} key={index} />;
    case IRecordType.Food:
      return <FoodTile item={item} key={index} />;
    default:
      return null;
  }
};

const Summary = () => (
  <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      {exampleData.map((item, index) => renderItem(item, index))}
    </ScrollView>
  </SafeAreaView>
);

export default Summary;
