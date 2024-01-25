import Slider from '@react-native-community/slider';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, Text } from 'react-native';

import Button from '../../components/Button/Button';
import { IRecordType } from '../Summary/Summary.types';

const Pain = () => {
  const [painScore, setPainScore] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const submitPainScore = async () => {
    setLoading(true);
    const { uid } = auth().currentUser ?? {};

    const user = firestore().collection('users').doc(uid);

    const record = await user.get();

    await user.set(
      {
        pains: [
          ...(record.get<'pains'>('pains') ?? []),
          {
            type: IRecordType.Pain,
            createdDate: new Date().toISOString(),
            metadata: {
              painScore,
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
    <View>
      <Text style={{ marginVertical: 24, fontSize: 24, textAlign: 'center', fontFamily: 'Rubik' }}>
        How much pain are you in?
      </Text>
      <Slider
        onValueChange={(val) => setPainScore(val)}
        style={{ marginHorizontal: 24 }}
        minimumValue={1}
        maximumValue={10}
        step={1}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 32,
          marginBottom: 24,
        }}>
        {[...Array(10).keys()].map((item) => (
          <Text key={item} style={{ fontSize: 18 }}>
            {Number(item) + 1}
          </Text>
        ))}
      </View>
      <Button loading={loading} title="Submit pain score" onPress={submitPainScore} />
    </View>
  );
};

export default Pain;
