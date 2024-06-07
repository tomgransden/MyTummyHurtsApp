import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { useToast } from './use-toast';
import { IDataPoint, IRecordType } from '../screens/Summary/Summary.types';

const getDatabaseKey = (recordType: IRecordType) => {
  switch (recordType) {
    case IRecordType.Bowel:
      return 'bowel';
    case IRecordType.Food:
      return 'foods';
    case IRecordType.Mood:
      return 'moods';
    case IRecordType.Pain:
      return 'pains';
    case IRecordType.Medication:
      return 'medications';
  }
};

export const useAddItem = () => {
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const { showErrorToast } = useToast();

  const addEntryToDatabase = async (dataPoint: IDataPoint) => {
    try {
      setLoading(true);

      const { uid } = auth().currentUser ?? {};

      const user = firestore().collection('users').doc(uid);

      const record = await user.get();

      const databaseKey = getDatabaseKey(dataPoint.type);

      await user.set(
        {
          [databaseKey]: [...(record.get<typeof databaseKey>(databaseKey) ?? []), dataPoint],
        },
        { merge: true }
      );

      setLoading(false);

      navigation.navigate('MainMenu');
    } catch {
      showErrorToast(`Please try again later.`);
      setLoading(false);
    }
  };
  return { loading, addEntryToDatabase };
};
