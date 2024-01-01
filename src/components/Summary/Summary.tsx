import functions from '@react-native-firebase/functions';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

import styles from './Summary.style';
import { IRecordType, IDataPoint } from './Summary.types';
import FoodTile from './subcomponents/FoodTile/FoodTile';
import MedicationTile from './subcomponents/MedicationTile/MedicationTile';
import MoodTile from './subcomponents/MoodTile/MoodTile';

// Data for react-native-chart-kit
const chartConfig = {
  backgroundGradientFrom: '#bfa2c8',
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: '#bfa2c8',
  backgroundGradientToOpacity: 1,
  color: () => 'mediumpurple',
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const data = {
  datasets: [
    {
      data: [0, 4, 0, 0, 0, 0, 9, 10],
      color: () => `mediumpurple`, // optional
      strokeWidth: 2, // optional
    },
  ],
  labels: [],
};

const renderItem = (item: IDataPoint, index: number) => {
  switch (item.type) {
    case IRecordType.Medication:
      return <MedicationTile item={item} key={index} />;
    case IRecordType.Food:
      return <FoodTile item={item} key={index} />;
    case IRecordType.Mood:
      return <MoodTile item={item} key={index} />;
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
        console.log(JSON.stringify(JSON.parse(data)));
        setResults(JSON.parse(data));
        setLoading(false);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {data ? (
        <LineChart
          data={data}
          width={Dimensions.get('screen').width}
          height={250}
          chartConfig={chartConfig}
          withVerticalLabels={false}
          withHorizontalLabels={false}
          withInnerLines
          withShadow={false}
          style={styles.chart}
          bezier
          fromZero
          hidePointsAtIndex={[3]}
        />
      ) : null}

      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {results.length > 0
          ? results.map(({ displayDate, sortedEntries }) => (
              <View key={displayDate}>
                <Text style={styles.date}>{displayDate}</Text>
                {sortedEntries.map((item, index) => renderItem(item, index))}
              </View>
            ))
          : null}
        {results.length === 0 && !loading ? (
          <Text style={styles.empty}>Add an entry to get started</Text>
        ) : null}
      </ScrollView>
      {loading ? <ActivityIndicator style={styles.loading} /> : null}
    </SafeAreaView>
  );
};

export default Summary;
