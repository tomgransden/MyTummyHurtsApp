import functions from '@react-native-firebase/functions';
import { DashPathEffect, matchFont } from '@shopify/react-native-skia';
import { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { CartesianChart, Line, Scatter } from 'victory-native';

import styles from './Summary.style';
import { IRecordType, IDataPoint } from './Summary.types';
import BowelTile from './subcomponents/BowelTile/BowelTile';
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
    case IRecordType.Bowel:
      return <BowelTile item={item} key={index} />;
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
      .httpsCallable('getSummaryData')()
      .then(({ data }) => {
        setResults(JSON.parse(JSON.stringify(data.chartData)));
        setSummary(JSON.parse(JSON.stringify(data.summaryData)));
        setLoading(false);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {results.length ? (
        <>
          <View style={styles.keyContainer}>
            <View style={styles.key}>
              <View style={styles.painKey} />
              <Text style={styles.keyTitle}>Pain</Text>
            </View>
            <View style={styles.key}>
              <View style={styles.bowelKey} />
              <Text style={styles.keyTitle}>Bowel</Text>
            </View>
          </View>
          <View style={styles.chartContainer}>
            <CartesianChart
              domain={{ y: [2, 9] }}
              axisOptions={{ font, tickCount: { x: 7, y: 10 } }}
              padding={8}
              domainPadding={40}
              data={results}
              xKey={'date'}
              yKeys={['pain', 'bowel']}>
              {({ points }) => (
                <>
                  <Scatter points={points.pain} color={'red'} radius={5} />
                  <Line connectMissingData points={points.pain} color="red" strokeWidth={1}>
                    <DashPathEffect intervals={[4, 4]} />
                  </Line>
                  <Scatter points={points.bowel} color={'brown'} radius={5} />
                  <Line connectMissingData points={points.bowel} color="brown" strokeWidth={1}>
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
        {summary?.length === 0 && !loading ? (
          <Text style={styles.empty}>Add an entry to get started</Text>
        ) : null}
      </ScrollView>
      {loading ? <ActivityIndicator style={styles.loading} /> : null}
    </SafeAreaView>
  );
};

export default Summary;
