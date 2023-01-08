import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native';

import Button from '../Button/Button';
import styles from './MenuScreen.style';
import { MenuOption, MenuScreenProps } from './MenuScreen.types';

const circleMenuOptions: MenuOption[] = [
  { title: 'Medication', pageToNavigateTo: 'Summary' },
  { title: 'Food', pageToNavigateTo: 'Summary' },
  { title: 'Bowel movements', pageToNavigateTo: 'Summary' },
  { title: 'Weight', pageToNavigateTo: 'Summary' },
  { title: 'Mood', pageToNavigateTo: 'Summary' },
];

const CentreCircle = (): JSX.Element => (
  <View style={styles.centerCircle}>
    <Text style={styles.centreCircleText}>Choose an entry to log</Text>
  </View>
);

type OuterCircleProps = {
  index: number;
  degreesPerSegment: number;
  onPress: () => void;
};

const OuterCircle = ({ index, degreesPerSegment, onPress }: OuterCircleProps): JSX.Element => (
  <TouchableOpacity
    style={[
      styles.outerCircleContainer,
      {
        transform: [{ rotate: index * degreesPerSegment + 90 + 'deg' }, { translateX: 140 }],
      },
    ]}
    onPress={onPress}>
    <Text
      style={[
        styles.outerCircleText,
        {
          transform: [{ rotate: -(index * degreesPerSegment + 90) + 'deg' }],
        },
      ]}>
      {circleMenuOptions?.[index]?.title}
    </Text>
  </TouchableOpacity>
);

const MenuScreen = ({ navigation }: MenuScreenProps): JSX.Element => {
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
        <Button title={'Settings'} onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export default MenuScreen;
