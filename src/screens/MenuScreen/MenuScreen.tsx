import { Button } from '@components';
import auth from '@react-native-firebase/auth';
import React from 'react';
import { SafeAreaView, View } from 'react-native';

import styles from './MenuScreen.style';
import { IMenuScreenProps, IMenuOption } from './MenuScreen.type';
import CentreCircle from './subcomponents/CentreCircle/CentreCircle';
import OuterCircle from './subcomponents/OuterCircle/OuterCircle';

const circleMenuOptions: IMenuOption[] = [
  //{ title: 'Medication', pageToNavigateTo: 'Medication' },
  { title: 'Food', pageToNavigateTo: 'Food' },
  //{ title: 'Bowel movements', pageToNavigateTo: 'Summary' },
  //{ title: 'Weight', pageToNavigateTo: 'Summary' },
  { title: 'Mood', pageToNavigateTo: 'Mood' },
  { title: 'Pain', pageToNavigateTo: 'Pain' },
  { title: 'Bowel movements', pageToNavigateTo: 'BowelMovements' },
];

const MenuScreen = ({ navigation }: IMenuScreenProps) => {
  const tot = circleMenuOptions.length;
  const degressPerSegment = 360 / tot;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.circleContainer}>
        {circleMenuOptions.map((item, index) => (
          <OuterCircle
            key={index}
            index={index}
            degreesPerSegment={degressPerSegment}
            onPress={() => {
              navigation.navigate(item?.pageToNavigateTo);
            }}
            text={circleMenuOptions?.[index]?.title}
          />
        ))}
        <CentreCircle />
      </View>
      <View>
        <Button
          title={'Summary'}
          onPress={() => {
            navigation.navigate('Summary');
          }}
        />
        <Button title={'My profile'} onPress={() => {}} />
        <Button
          title={'Settings'}
          onPress={() => {
            navigation.navigate('Settings');
          }}
        />
        <Button
          title={'Logout'}
          onPress={() => {
            auth().signOut();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default MenuScreen;
