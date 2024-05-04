import { Button } from '@components';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './Mood.style';
import { useAddItem } from '../../hooks/use-add-item';
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

  const { addEntryToDatabase, loading } = useAddItem();

  const submitMood = async () => {
    if (selectedMood) {
      await addEntryToDatabase({
        createdDate: new Date().toISOString(),
        metadata: {
          mood: selectedMood?.mood,
          moodIcon: selectedMood?.moodIcon,
        },
        type: IRecordType.Mood,
      });
    }
  };

  return (
    <View>
      <Text style={styles.heading}>How are you feeling right now?</Text>
      <View style={styles.moodsContainer}>
        {moodIcons.map((item) => (
          <TouchableOpacity key={item.mood} onPress={() => setSelectedMood(item)}>
            <MaterialCommunityIcons
              key={item.mood}
              size={60}
              name={item.moodIcon}
              color={selectedMood === item ? 'black' : 'grey'}
            />
          </TouchableOpacity>
        ))}
      </View>

      {selectedMood ? <Button loading={loading} onPress={submitMood} label="Submit mood" /> : null}
    </View>
  );
};

export default Mood;
