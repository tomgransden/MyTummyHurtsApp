import React from 'react';
import { View } from 'react-native';

import styles from './MedicationScreen.style';
import Pill from './subcomponents/Pill/Pill';

const MedicationScreen = () => (
  <View style={styles.container}>
    <View style={styles.pillList}>
      {['Paracetamol 400mg', 'Buscopan 20mg', 'Lixana 100mg'].map((element) => (
        <Pill key={element} name={element} />
      ))}
    </View>
  </View>
);

export default MedicationScreen;
