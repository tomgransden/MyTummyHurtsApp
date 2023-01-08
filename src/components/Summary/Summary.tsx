import dayjs from 'dayjs';
import { SafeAreaView, ScrollView, View, Text, Image } from 'react-native';

import styles from './Summary.style';
import { MedicationDataPoint, FoodDataPoint, RecordType, DataPoint } from './Summary.types';

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

const MedicationItem = ({ item }: { item: MedicationDataPoint }) => (
  <View
    style={{
      minHeight: 56,
      paddingBottom: 16,
      marginHorizontal: 16,
      borderWidth: 1,
      backgroundColor: 'white',
    }}>
    <View
      style={{
        flexDirection: 'row',
        marginTop: 8,
        paddingHorizontal: 16,
      }}>
      <View
        style={{
          backgroundColor: 'white',
          alignSelf: 'flex-start',
        }}>
        <Text style={{ fontSize: 16, fontFamily: 'Rubik' }}>
          {dayjs(item.createdDate).format('hh:mma')}
        </Text>
      </View>
      <Text> - </Text>
      <View
        style={{
          backgroundColor: 'white',
          alignSelf: 'flex-start',
        }}>
        <Text style={{ fontSize: 16, fontFamily: 'Rubik' }}>{RecordType[item.type]}</Text>
      </View>
    </View>
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 12,
      }}>
      {item.metadata.medications.map((medication, index) => (
        <View
          key={`medication-${index}`}
          style={{
            borderWidth: 1,
            borderRadius: 32,
            marginRight: 12,
            marginTop: 12,
            minHeight: 24,
            padding: 8,
          }}>
          <Text style={{ fontSize: 12 }}>{medication}</Text>
        </View>
      ))}
    </View>
  </View>
);

const FoodItem = ({ item }: { item: FoodDataPoint }) => (
  <View
    style={{
      minHeight: 56,
      marginHorizontal: 16,
      paddingBottom: 16,
      marginTop: 16,
      borderWidth: 1,
      backgroundColor: 'white',
    }}>
    <View
      style={{
        flexDirection: 'row',
        marginTop: 8,
        paddingHorizontal: 16,
      }}>
      <View
        style={{
          backgroundColor: 'white',
          alignSelf: 'flex-start',
        }}>
        <Text style={{ fontSize: 16, fontFamily: 'Rubik' }}>
          {dayjs(item.createdDate).format('hh:mma')}
        </Text>
      </View>
      <Text> - </Text>
      <View
        style={{
          backgroundColor: 'white',
          alignSelf: 'flex-start',
        }}>
        <Text style={{ fontSize: 16, fontFamily: 'Rubik' }}>{RecordType[item.type]}</Text>
      </View>
    </View>
    <View
      style={{
        marginHorizontal: 16,
        flexDirection: 'row',
        marginTop: 16,
      }}>
      <Image
        source={{ uri: item?.metadata?.image }}
        style={{ width: 60, height: 60, resizeMode: 'cover' }}
      />
      <Text style={{ marginLeft: 16, fontFamily: 'Rubik', flex: 1, flexWrap: 'wrap' }}>
        {item.metadata.description}
      </Text>
    </View>
  </View>
);

const renderItem = (item: DataPoint, index: number) => {
  switch (item.type) {
    case RecordType.Medication:
      return <MedicationItem item={item} key={index} />;
    case RecordType.Food:
      return <FoodItem item={item} key={index} />;
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
