import { Button, TextInput } from '@components';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import storage from '@react-native-firebase/storage';
import { randomUUID } from 'expo-crypto';
import { launchImageLibraryAsync, requestMediaLibraryPermissionsAsync } from 'expo-image-picker';
import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';

import { useAddItem } from '../../hooks/use-add-item';
import { IRecordType } from '../Summary/Summary.types';

const Food = () => {
  const [foodDescription, setFoodDescription] = useState('');
  const [foodPhoto, setFoodPhoto] = useState<string | undefined>();
  const [uploadingPhoto, setUploadingPhoto] = useState(false);

  const { loading, addEntryToDatabase } = useAddItem();

  const selectPhoto = async () => {
    const result = await requestMediaLibraryPermissionsAsync();

    if (result.status === 'granted') {
      const image = await launchImageLibraryAsync({ allowsEditing: true, aspect: [1, 1] });

      setFoodPhoto(image.assets?.[0].uri);
    } else {
      Alert.alert(
        'Permissions needed',
        'You must accept permissions to use this feature. This can be changed in your phone settings.'
      );
    }
  };

  const submitFood = async () => {
    setUploadingPhoto(true);

    let url: string | undefined;

    if (foodPhoto) {
      const reference = storage().ref(`${randomUUID()}.jpg`);

      await reference.putFile(foodPhoto).catch((err) => console.log(err));

      url = await reference.getDownloadURL();
    }

    await addEntryToDatabase({
      type: IRecordType.Food,
      createdDate: new Date().toISOString(),
      metadata: {
        description: foodDescription,
        image: url ?? '',
      },
    });

    setUploadingPhoto(false);
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
      <Button loading={loading || uploadingPhoto} onPress={submitFood} label="Submit" />
    </View>
  );
};

export default Food;
