import functions from '@react-native-firebase/functions';
import { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, Text } from 'react-native';

import styles from './Summary.style';
import { IRecordType, IDataPoint } from './Summary.types';
import FoodTile from './subcomponents/FoodTile/FoodTile';
import MedicationTile from './subcomponents/MedicationTile/MedicationTile';

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

const Summary = () => {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState<{ displayDate: string; sortedEntries: [] }[]>([]);
  useEffect(() => {
    functions()
      .httpsCallable('aggregateResults')()
      .then(({ data }) => {
        console.log('api: ' + data);
        setResults(JSON.parse(data));
        setLoading(false);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {results.length > 0
          ? results.map(({ displayDate, sortedEntries }) => (
              <>
                <Text>{displayDate}</Text>
                {sortedEntries.map((item, index) => renderItem(item, index))}
              </>
            ))
          : null}
        {results.length === 0 && !loading ? <Text>Add an entry to get started</Text> : null}
      </ScrollView>
      {loading ? (
        <ActivityIndicator
          style={{ position: 'absolute', zIndex: 1, top: 0, bottom: 0, left: 0, right: 0 }}
        />
      ) : null}
    </SafeAreaView>
  );
};

export default Summary;
