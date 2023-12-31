import functions from '@react-native-firebase/functions';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

import styles from './Summary.style';
import { IRecordType, IDataPoint } from './Summary.types';
import FoodTile from './subcomponents/FoodTile/FoodTile';
import MedicationTile from './subcomponents/MedicationTile/MedicationTile';
import MoodTile from './subcomponents/MoodTile/MoodTile';
import { AbstractChartConfig } from 'react-native-chart-kit/dist/AbstractChart';
import { LineChartData } from 'react-native-chart-kit/dist/line-chart/LineChart';

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

  const data: LineChartData = {
    datasets: [
      {
        data: [0, 4, 0, 0, 0, 0, 9, 10],
        color: () => `mediumpurple`, // optional
        strokeWidth: 2, // optional
      }
    ],
    labels: []
  };

  const chartConfig: AbstractChartConfig = {
    backgroundGradientFrom: '#bfa2c8',
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: '#bfa2c8',
    backgroundGradientToOpacity: 1,
    color: () => `mediumpurple`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <SafeAreaView style={styles.container}>
      <LineChart
        data={data}
        width={Dimensions.get('screen').width}
        height={250}
        chartConfig={chartConfig}
        withVerticalLabels={false}
        withHorizontalLabels={false}
        withInnerLines
        withShadow={false}
        style={{marginLeft: -30, marginTop: 12}}
        bezier
        fromZero
        hidePointsAtIndex={[3]}
      />

      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {results.length > 0
          ? results.map(({ displayDate, sortedEntries }) => (
              <View key={displayDate}>
                <Text style={{ marginLeft: 16, fontSize: 24 }}>{displayDate}</Text>
                {sortedEntries.map((item, index) => renderItem(item, index))}
              </View>
            ))
          : null}
        {results.length === 0 && !loading ? (
          <Text style={{ textAlign: 'center', fontSize: 28, fontFamily: 'Rubik' }}>
            Add an entry to get started
          </Text>
        ) : null}
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
