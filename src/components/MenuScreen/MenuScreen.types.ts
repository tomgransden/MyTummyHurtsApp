import { RootStackParamList } from '../../../App';

export type MenuOption = {
  title: string;
  pageToNavigateTo: keyof RootStackParamList;
};
