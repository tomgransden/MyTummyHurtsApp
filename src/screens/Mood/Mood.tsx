import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, Text } from 'react-native';

import { styles } from './Mood.style';
import Button from '../../components/Button/Button';
import { addToDatabase } from '../../utils/add-to-database';
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

    if (selectedMood) {
      await addToDatabase({
        type: IRecordType.Mood,
        createdDate: new Date().toISOString(),
        metadata: {
          mood: selectedMood?.mood,
          moodIcon: selectedMood?.moodIcon,
        },
      });
    }

    setLoading(false);

    navigation.navigate('MainMenu');
  };

  return (
    <View>
      <Text style={styles.heading}>How are you feeling right now?</Text>
      <View style={styles.moodsContainer}>
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
