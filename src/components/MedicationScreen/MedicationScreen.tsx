import { AntDesign } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View } from 'react-native';

import { RootStackParamList } from '../../../App';
import styles from './MedicationScreen.style';
import Pill from './subcomponents/Pill/Pill';

type MedicationScreenProps = NativeStackScreenProps<RootStackParamList, 'Medication'>;

const MedicationScreen = ({ navigation }: MedicationScreenProps) => {
  const [medication, addMedication] = useState<string[]>([
    'Paracetamol 400mg',
    'Buscopan 20mg',
    'Lixana 100mg',
  ]);

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AntDesign
          onPress={() => addMedication((prevState) => [...prevState, 'a'])}
          name="pluscircleo"
          size={24}
          color="white"
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.pillList}>
        {medication.map((element) => (
          <Pill key={element} name={element} />
        ))}
      </View>
    </View>
  );
};

export default MedicationScreen;
