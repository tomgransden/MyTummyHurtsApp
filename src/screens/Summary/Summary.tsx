import functions from '@react-native-firebase/functions';
import { DashPathEffect, matchFont } from '@shopify/react-native-skia';
import { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { CartesianChart, Line, Scatter } from 'victory-native';

import styles from './Summary.style';
import { IRecordType, IDataPoint } from './Summary.types';
import FoodTile from './subcomponents/FoodTile/FoodTile';
import MedicationTile from './subcomponents/MedicationTile/MedicationTile';
import MoodTile from './subcomponents/MoodTile/MoodTile';
import PainTile from './subcomponents/PainTile/PainTile';

const font = matchFont({ fontSize: 12 });

const renderItem = (item: IDataPoint, index: number) => {
  switch (item.type) {
    case IRecordType.Medication:
      return <MedicationTile item={item} key={index} />;
    case IRecordType.Food:
      return <FoodTile item={item} key={index} />;
    case IRecordType.Mood:
      return <MoodTile item={item} key={index} />;
    case IRecordType.Pain:
      return <PainTile item={item} key={index} />;
    default:
      return null;
  }
};

const Summary = () => {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState<
    { date: string; pain: number | null; bowel: number | null }[]
  >([]);
  const [summary, setSummary] = useState<{ displayDate: string; sortedEntries: [] }[]>();
  useEffect(() => {
    functions()
      .httpsCallable('generateVictoryDataForPeriod')()
      .then(({ data }) => {
        console.log(JSON.stringify(JSON.parse(data)));
        setResults(JSON.parse(data));
        setLoading(false);
      });

    functions()
      .httpsCallable('aggregateResults')()
      .then(({ data }) => {
        console.log(JSON.stringify(JSON.parse(data)));
        setSummary(JSON.parse(data));
        setLoading(false);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {results.length ? (
        <>
          <View
            style={{
              marginTop: 12,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{ height: 10, width: 10, borderRadius: 25, backgroundColor: 'red' }} />
            <Text style={{ marginLeft: 8 }}>Pain</Text>
          </View>
          <View style={{ height: 300 }}>
            <CartesianChart
              domain={{ y: [2, 9] }}
              axisOptions={{ font, tickCount: { x: 7, y: 10 } }}
              padding={8}
              domainPadding={40}
              data={[
                { date: 'Fri', pain: null },
                { date: 'Sat', pain: null },
                { date: 'Sun', pain: null },
                { date: 'Mon', pain: null },
                { date: 'Tue', pain: 9 },
                { date: 'Wed', pain: null },
                { date: 'Thu', pain: 5 },
              ]}
              xKey={'date'}
              yKeys={['pain']}>
              {({ points }) => (
                <>
                  <Scatter points={points.pain} color={'red'} radius={5} />
                  <Line
                    connectMissingData
                    points={points.pain}
                    color="red"
                    strokeWidth={1}
                    animate={{ type: 'timing', duration: 300 }}>
                    <DashPathEffect intervals={[4, 4]} />
                  </Line>
                </>
              )}
            </CartesianChart>
          </View>
        </>
      ) : null}

      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {summary
          ? summary.map(({ displayDate, sortedEntries }) => (
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
