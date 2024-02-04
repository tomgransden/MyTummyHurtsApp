import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { TextInput, View } from 'react-native';

import Button from '../../components/Button/Button';
import { addToDatabase } from '../../utils/add-to-database';
import { IRecordType } from '../Summary/Summary.types';

const Food = () => {
  const [foodDescription, setFoodDescription] = useState('');
  const [foodPhoto] = useState('http://placekitten.com/500/500');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const submitFood = async () => {
    setLoading(true);

    await addToDatabase({
      type: IRecordType.Food,
      createdDate: new Date().toISOString(),
      metadata: {
        description: foodDescription,
        image: foodPhoto,
      },
    });

    setLoading(false);

    navigation.navigate('Summary');
  };
  return (
    <View>
      <TextInput
        placeholder="Describe your food"
        onChangeText={(text) => setFoodDescription(text)}
      />
      <Button loading={loading} onPress={submitFood} title="Submit" />
    </View>
  );
};

export default Food;
