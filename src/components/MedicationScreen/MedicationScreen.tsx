import { AntDesign } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState, useRef, useMemo, useCallback, useEffect } from 'react';
import { View, Text } from 'react-native';

import { RootStackParamList } from '../../../App';
import styles from './MedicationScreen.style';
import Pill from './subcomponents/Pill/Pill';
import BottomSheet, { BottomSheetBackdrop, BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { TextInput } from 'react-native-gesture-handler';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

type MedicationScreenProps = NativeStackScreenProps<RootStackParamList, 'Medication'>;

const MedicationScreen = ({ navigation }: MedicationScreenProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const inputRef = useRef<TextInput>(null);

  const [medication, addMedication] = useState<string[]>([]);
  const { getItem, setItem } = useAsyncStorage('@mth_medications');

  // variables
  const snapPoints = useMemo(() => ['25%'], []);

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        enableTouchThrough={true}
      />
    ),
    []
  );

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
    //if (index === 0) inputRef.current?.focus();
  }, []);

  useEffect(() => {
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

  const readItemFromStorage = async () => {
    let item = await getItem();
    let parsedItem: string[] = [];
    if (typeof item === 'string') parsedItem = JSON.parse(item);
    console.log(parsedItem);
    addMedication(parsedItem);
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);

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
          <Pill key={element} name={element} onPress={() => {}} />
        ))}
      </View>
      <BottomSheet
        backdropComponent={renderBackdrop}
        enablePanDownToClose={true}
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        keyboardBehavior="interactive"
        keyboardBlurBehavior="restore"
        onChange={handleSheetChanges}>
        <View style={{ marginHorizontal: 16 }}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Rubik',
              fontWeight: 'bold',
              color: 'mediumpurple',
            }}>
            What is the name and dosage of your new medication?
          </Text>
          <BottomSheetTextInput
            ref={inputRef}
            placeholder={'Enter name/dosage here...'}
            style={{ fontSize: 20, fontFamily: 'Rubik', marginTop: 12 }}
            onEndEditing={async (e) => {
              if (e.nativeEvent.text.length) {
                const newMeds = [...medication, e.nativeEvent.text];
                addMedication(newMeds);
                await setItem(JSON.stringify(newMeds));
              }

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
