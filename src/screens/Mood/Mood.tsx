import { MaterialCommunityIcons } from '@expo/vector-icons';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, Text } from 'react-native';

import Button from '../../components/Button/Button';
import { IRecordType } from '../Summary/Summary.types';

type IMood = {
  mood: 'sad' | 'angry' | 'sick' | 'neutral' | 'happy';
  moodIcon: keyof (typeof MaterialCommunityIcons)['glyphMap'];
};

const moodIcons: IMood[] = [
  { mood: 'sad', moodIcon: 'emoticon-cry-outline' },
  { mood: 'angry', moodIcon: 'emoticon-angry-outline' },
  { mood: 'sick', moodIcon: 'emoticon-sick-outline' },
  { mood: 'neutral', moodIcon: 'emoticon-neutral-outline' },
  { mood: 'happy', moodIcon: 'emoticon-happy-outline' },
];

const Mood = () => {
  const [selectedMood, setSelectedMood] = useState<IMood | undefined>();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const submitMood = async () => {
    setLoading(true);
    const { uid } = auth().currentUser ?? {};

    console.log(uid);

    const document = firestore().collection('users').doc(uid);

    const record = await document.get();

    await document.set(
      {
        moods: [
          ...(record.get<keyof { moods: [] }>('moods') ?? []),
          {
            createdDate: new Date().toISOString(),
            metadata: {
              mood: selectedMood?.mood,
              moodIcon: selectedMood?.moodIcon,
            },
            type: IRecordType.Mood,
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
      <Text style={{ fontFamily: 'Rubik', fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
        How are you feeling right now?
      </Text>
      <View
        style={{
          marginTop: 32,
          marginBottom: 16,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        {moodIcons.map((item) => (
          <MaterialCommunityIcons
            key={item.mood}
            size={60}
            name={item.moodIcon}
            color={selectedMood === item ? 'black' : 'grey'}
            onPress={() => setSelectedMood(item)}
          />
        ))}
      </View>

      {selectedMood ? <Button loading={loading} onPress={submitMood} title="Submit mood" /> : null}
    </View>
  );
};

export default Mood;
