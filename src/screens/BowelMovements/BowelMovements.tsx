import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import Slider from '@react-native-community/slider';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
import { useState } from 'react';
import { View, Text, Image, Platform } from 'react-native';

import { styles } from './BowelMovements.style';
import Button from '../../components/Button/Button';
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
  const [dateTime, setDateTime] = useState<Date>(new Date());
  const [userSelectedDate, setUserSelectedDate] = useState(false);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [bristolScore, setBristolScore] = useState(1);

  const navigation = useNavigation();

  const chooseTime = () => {
    setShow(true);
  };

  const selectTime = (event: DateTimePickerEvent, date: Date) => {
    setShow(false);

    if (date && event.type === 'set') {
      setUserSelectedDate(true);
      setDateTime(date);
    }
  };

  const submitBowelMovement = async () => {
    setLoading(true);

    const { uid } = auth().currentUser ?? {};

    const user = firestore().collection('users').doc(uid);

    const record = await user.get();

    await user.set(
      {
        bowel: [
          ...(record.get<'bowel'>('bowel') ?? []),
          {
            type: IRecordType.Bowel,
            createdDate: dateTime.toISOString(),
            metadata: {
              bristolScore,
            },
          },
        ],
      },
      { merge: true }
    );

    setLoading(false);

    navigation.navigate('MainMenu');
  };

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

      <Button loading={loading} title="Submit" onPress={submitBowelMovement} />

      {show ? (
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
