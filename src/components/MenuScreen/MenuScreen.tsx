import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView, View } from 'react-native';

import { RootStackParamList } from '../../../App';
import Button from '../Button/Button';
import styles from './MenuScreen.style';
import { MenuOption } from './MenuScreen.types';
import CentreCircle from './subcomponents/CentreCircle/CentreCircle';
import OuterCircle from './subcomponents/OuterCircle/OuterCircle';

type MenuScreenProps = NativeStackScreenProps<RootStackParamList, 'MainMenu'>;

const circleMenuOptions: MenuOption[] = [
  { title: 'Medication', pageToNavigateTo: 'Medication' },
  { title: 'Food', pageToNavigateTo: 'Summary' },
  { title: 'Bowel movements', pageToNavigateTo: 'Summary' },
  { title: 'Weight', pageToNavigateTo: 'Summary' },
  { title: 'Mood', pageToNavigateTo: 'Summary' },
];

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
        <Button title={'Settings'} onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export default MenuScreen;
