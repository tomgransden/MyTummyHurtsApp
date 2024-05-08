import { Button } from '@components';
import auth from '@react-native-firebase/auth';
import React from 'react';
import { SafeAreaView, View } from 'react-native';

import styles from './MenuScreen.style';
import { IMenuScreenProps, IMenuOption } from './MenuScreen.type';
import CentreCircle from './subcomponents/CentreCircle/CentreCircle';
import OuterCircle from './subcomponents/OuterCircle/OuterCircle';

const circleMenuOptions: IMenuOption[] = [
  { title: 'Food', pageToNavigateTo: 'Food' },
  { title: 'Mood', pageToNavigateTo: 'Mood' },
  { title: 'Pain', pageToNavigateTo: 'Pain' },
  { title: 'Bowel movement', pageToNavigateTo: 'BowelMovements' },
];

const MenuScreen = ({ navigation }: IMenuScreenProps) => {
  const tot = circleMenuOptions.length;
  const degreesPerSegment = 360 / tot;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.circleContainer}>
        {circleMenuOptions.map((item, index) => (
          <OuterCircle
            key={item.title}
            index={index}
            degreesPerSegment={degreesPerSegment}
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
          label={'Summary'}
          onPress={() => {
            navigation.navigate('Summary');
          }}
        />
        <Button
          label={'Settings'}
          onPress={() => {
            navigation.navigate('Settings');
          }}
        />
        <Button
          label={'Logout'}
          onPress={() => {
            auth().signOut();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default MenuScreen;
