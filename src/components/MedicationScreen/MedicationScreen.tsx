import { AntDesign } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState, useRef, useMemo, useCallback } from 'react';
import { View, Text } from 'react-native';

import { RootStackParamList } from '../../../App';
import styles from './MedicationScreen.style';
import Pill from './subcomponents/Pill/Pill';
import BottomSheet, { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { TextInput } from 'react-native-gesture-handler';

type MedicationScreenProps = NativeStackScreenProps<RootStackParamList, 'Medication'>;

const MedicationScreen = ({ navigation }: MedicationScreenProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const inputRef = useRef<TextInput>(null);

  // variables
  const snapPoints = useMemo(() => ['25%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
    //if (index === 0) inputRef.current?.focus();
  }, []);
  const [medication, addMedication] = useState<string[]>([]);

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AntDesign
          onPress={() => bottomSheetRef.current?.expand()}
          name="pluscircleo"
          size={24}
          color="white"
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {!medication.length ? (
        <Text
          style={{ fontFamily: 'Rubik', fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
          No medications available
        </Text>
      ) : null}
      <View style={styles.pillList}>
        {medication.map((element) => (
          <Pill key={element} name={element} />
        ))}
      </View>
      <BottomSheet
        enablePanDownToClose={true}
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        keyboardBehavior="interactive"
        keyboardBlurBehavior="restore"
        onChange={handleSheetChanges}>
        <View style={{ marginHorizontal: 16 }}>
          <BottomSheetTextInput
            ref={inputRef}
            placeholder={'Enter name/dosage'}
            style={{ fontSize: 24, fontFamily: 'Rubik' }}
            onEndEditing={(e) => {
              if (e.nativeEvent.text.length)
                addMedication((prevMeds) => [...prevMeds, e.nativeEvent.text]);

              setTimeout(() => {
                bottomSheetRef.current?.close();
                inputRef.current?.clear();
              }, 50);
            }}
          />
        </View>
      </BottomSheet>
    </View>
  );
};

export default MedicationScreen;
