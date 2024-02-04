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

type ISummaryResponse = {
  chartData: { date: string; pain: number | null; bowel: number | null }[];
  summaryData: { displayDate: string; sortedEntries: IDataPoint[] }[];
};

const Summary = () => {
  const [loadingSummary, setLoadingSummary] = useState(true);
  const [data, setData] = useState<ISummaryResponse>();
  useEffect(() => {
    functions()
      .httpsCallable('getSummaryData')()
      .then(({ data }: { data: ISummaryResponse }) => {
        setData(data);
        setLoadingSummary(false);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {data?.chartData.length ? (
        <>
          <View style={styles.keyContainer}>
            <View style={styles.key}>
              <View style={styles.painKey} />
              <Text style={styles.keyTitle}>Pain</Text>
            </View>
            <View style={[styles.key, { marginLeft: 12 }]}>
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
              data={data.chartData}
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
        {data?.summaryData
          ? data.summaryData.map(({ displayDate, sortedEntries }) => (
              <View key={displayDate}>
                <Text style={styles.date}>{displayDate}</Text>
                {sortedEntries.map((item, index) => renderItem(item, index))}
              </View>
            ))
          : null}
        {data?.summaryData?.length === 0 && !loadingSummary ? (
          <Text style={styles.empty}>Add an entry to get started</Text>
        ) : null}
      </ScrollView>
      {loadingSummary ? (
        <View style={{ flex: 1 }}>
          <ActivityIndicator size="large" />
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default Summary;
