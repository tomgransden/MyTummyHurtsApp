import { Button } from '@components';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import Slider from '@react-native-community/slider';
import dayjs from 'dayjs';
import { useState } from 'react';
import { View, Text, Image, Platform } from 'react-native';

import { styles } from './BowelMovements.style';
import { useDateTimePicker } from './hooks/use-date-time-picker';
import { useAddItem } from '../../hooks/use-add-item';
import { IRecordType } from '../Summary/Summary.types';

const bristol = require('../../../assets/bristol.png');

const IOSHeader = ({
  dateTime,
  selectTime,
}: {
  dateTime: Date;
  selectTime: (event: DateTimePickerEvent, date: Date) => void;
}) => {
  return (
    <View style={styles.containerIos}>
      <Text style={styles.text}>Time of movement: </Text>
      {Platform.OS === 'ios' ? (
        <DateTimePicker
          style={{ marginLeft: -8 }}
          display="clock"
          testID="dateTimePicker"
          value={dateTime}
          mode={'time'}
          onChange={selectTime}
        />
      ) : null}
    </View>
  );
};
const AndroidHeader = ({
  dateTime,
  userSelectedDate,
  chooseTime,
}: {
  dateTime: Date;
  userSelectedDate: boolean;
  chooseTime: () => void;
}) => {
  return (
    <View style={styles.containerAndroid}>
      <Text style={styles.text}>
        Time of movement:{' '}
        <Text style={styles.bold}>
          {userSelectedDate ? dayjs(dateTime).format('hh:mm a') : 'Now'}
        </Text>
      </Text>
      <Text onPress={chooseTime} style={[styles.text, styles.bold]}>
        Change
      </Text>
    </View>
  );
};

const BowelMovements = () => {
  const [bristolScore, setBristolScore] = useState(1);

  const { addEntryToDatabase, loading } = useAddItem();

  const { chooseTime, dateTime, selectTime, showPicker, userSelectedDate } = useDateTimePicker();

  const submitBowelMovement = async () =>
    await addEntryToDatabase({
      type: IRecordType.Bowel,
      createdDate: dateTime.toISOString(),
      metadata: {
        bristolScore,
      },
    });

  return (
    <>
      {Platform.OS === 'ios' ? (
        <IOSHeader dateTime={dateTime} selectTime={selectTime} />
      ) : (
        <AndroidHeader
          userSelectedDate={userSelectedDate}
          dateTime={dateTime}
          chooseTime={chooseTime}
        />
      )}

      <View>
        <Image source={bristol} style={styles.image} />

        <Slider
          style={{ marginHorizontal: 12 }}
          onValueChange={(val) => setBristolScore(val)}
          minimumValue={1}
          maximumValue={7}
          step={1}
        />

        <View style={styles.scores}>
          {[...Array(7).keys()].map((item) => (
            <Text key={item} style={styles.scoreText}>
              {item + 1}
            </Text>
          ))}
        </View>
      </View>

      <Button loading={loading} label="Submit" onPress={submitBowelMovement} />

      {showPicker ? (
        <DateTimePicker
          style={{ marginLeft: -12 }}
          display="clock"
          testID="dateTimePicker"
          value={dateTime}
          mode={'time'}
          onChange={selectTime}
        />
      ) : null}
    </>
  );
};

export default BowelMovements;
