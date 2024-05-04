import { Button } from '@components';
import Slider from '@react-native-community/slider';
import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import { styles } from './Pain.style';
import { useAddItem } from '../../hooks/use-add-item';
import { IRecordType } from '../Summary/Summary.types';

const Pain = () => {
  const [painScore, setPainScore] = useState(1);
  const [painDescription, setPainDescription] = useState<string>('');

  const { addEntryToDatabase, loading } = useAddItem();

  const submitPainScore = async () =>
    await addEntryToDatabase({
      type: IRecordType.Pain,
      createdDate: new Date().toISOString(),
      metadata: {
        painScore,
        painDescription,
      },
    });

  return (
    <View>
      <Text style={styles.painTitle}>How much pain are you in?</Text>
      <Slider
        onValueChange={(val) => setPainScore(val)}
        style={styles.slider}
        minimumValue={1}
        maximumValue={10}
        step={1}
      />
      <View style={styles.painsContainer}>
        {[...Array(10).keys()].map((item) => (
          <Text key={item} style={styles.painScore}>
            {Number(item) + 1}
          </Text>
        ))}
      </View>

      <TextInput
        textAlignVertical="top"
        maxLength={100}
        onChangeText={(text) => setPainDescription(text)}
        placeholderTextColor="gray"
        placeholder="Enter any notes here (up to 100 characters)"
        multiline
        style={styles.input}
      />
      <Button loading={loading} label="Submit pain score" onPress={submitPainScore} />
    </View>
  );
};

export default Pain;
