import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import * as Crypto from 'expo-crypto';

import { IDataPoint, IRecordType } from '../../screens/Summary/Summary.types';

type ItemWithoutId = Omit<IDataPoint, 'id'>;

const getKeyForItem = (item: ItemWithoutId) => {
  switch (item.type) {
    case IRecordType.Bowel:
      return 'bowel';
    case IRecordType.Food:
      return 'foods';
    case IRecordType.Mood:
      return 'moods';
    case IRecordType.Pain:
      return 'pains';
    case IRecordType.Medication:
    default:
      return null;
  }
};

export const addToDatabase = async (item: ItemWithoutId) => {
  //Get current user id
  const { uid } = auth().currentUser ?? {};

  //Get the document for the user
  const user = firestore().collection('users').doc(uid);

  //Ger the user record
  const userRecord = await user.get();

  //Decide which key to update
  const keyToUpdate = getKeyForItem(item);

  if (keyToUpdate) {
    await user.set(
      {
        [keyToUpdate]: [
          ...(userRecord.get<typeof keyToUpdate>(keyToUpdate) ?? []),
          { ...item, id: Crypto.randomUUID() },
        ],
      },
      { merge: true }
    );
  }
};
