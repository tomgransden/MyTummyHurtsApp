import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../App';

export type IMenuOption = {
  title: string;
  pageToNavigateTo: keyof RootStackParamList;
};

export type IMenuScreenProps = NativeStackScreenProps<RootStackParamList, 'MainMenu'>;
