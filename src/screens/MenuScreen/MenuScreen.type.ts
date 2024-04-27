import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../navigation/MyTummyHurtsNavigation.type';

export type IMenuOption = {
  title: string;
  pageToNavigateTo: 'BowelMovements' | 'Food' | 'Mood' | 'Pain';
};

export type IMenuScreenProps = NativeStackScreenProps<RootStackParamList, 'MainMenu'>;
