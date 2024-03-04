import { MaterialCommunityIcons } from '@expo/vector-icons';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { useNavigation } from '@react-navigation/native';
import { randomUUID } from 'expo-crypto';
import { launchImageLibraryAsync, getMediaLibraryPermissionsAsync } from 'expo-image-picker';
import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';

import Button from '../../components/Button/Button';
import TextInput from '../../components/TextInput/TextInput';
import { IRecordType } from '../Summary/Summary.types';

const Food = () => {
  const [foodDescription, setFoodDescription] = useState('');
  const [foodPhoto, setFoodPhoto] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const selectPhoto = async () => {
    const result = await getMediaLibraryPermissionsAsync();

    if (result.status === 'granted') {
      const image = await launchImageLibraryAsync({ allowsEditing: true, aspect: [1, 1] });

      setFoodPhoto(image.assets?.[0].uri);
    } else {
      Alert.alert('Permissions needed', 'You must accept permissions to use this feature');
    }
  };

  const submitFood = async () => {
    setLoading(true);
    const { uid } = auth().currentUser ?? {};

    const reference = storage().ref(`${randomUUID()}.jpg`);

    await reference.putFile(foodPhoto!).catch((err) => console.log(err));

    const url = await reference.getDownloadURL();

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
              image: url,
            },
          },
        ],
      },
      { merge: true }
    );

    setLoading(false);

    navigation.goBack();
  };
  return (
    <View style={{ paddingTop: 16, paddingHorizontal: 16 }}>
      <TextInput
        placeholder="Describe your food"
        onChangeText={(text) => setFoodDescription(text)}
      />

      <TouchableOpacity
        onPress={selectPhoto}
        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 24, marginBottom: 24 }}>
        {foodPhoto ? (
          <Image source={{ uri: foodPhoto }} style={{ width: 64, height: 64 }} />
        ) : (
          <MaterialCommunityIcons
            onPress={selectPhoto}
            color={'mediumpurple'}
            size={64}
            name="camera-burst"
          />
        )}
        <Text style={{ marginLeft: 8, fontSize: 16, fontFamily: 'Rubik' }}>
          {!foodPhoto ? 'No image selected (tap to choose)' : '1 photo selected (tap to change)'}
        </Text>
      </TouchableOpacity>
      <Button loading={loading} onPress={submitFood} title="Submit" />
    </View>
  );
};

export default Food;
