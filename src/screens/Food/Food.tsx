import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useState } from 'react';
import { Button, TextInput, View } from 'react-native';

import { IRecordType } from '../Summary/Summary.types';

const Food = () => {
  const [foodDescription, setFoodDescription] = useState('');
  const [foodPhoto] = useState('http://placekitten.com/500/500');

  const submitFood = async () => {
    const { uid } = auth().currentUser ?? {};

    const user = firestore().collection('users').doc(uid);

    const record = await user.get();

    await user.set(
      {
        foods: [
          ...(record.get<keyof { foods: [] }>('foods') ?? []),
          {
            type: IRecordType.Food,
            createdDate: new Date().toISOString(),
            metadata: {
              description: foodDescription,
              image: foodPhoto,
            },
          },
        ],
      },
      { merge: true }
    );
  };
  return (
    <View>
      <TextInput
        placeholder="Describe your food"
        onChangeText={(text) => setFoodDescription(text)}
      />
      <Button onPress={submitFood} title="Submit" />
    </View>
  );
};

export default Food;
