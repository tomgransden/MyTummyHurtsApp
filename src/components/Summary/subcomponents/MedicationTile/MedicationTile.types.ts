import { TextStyle, ViewStyle } from 'react-native';

import { MedicationDataPoint } from '../../Summary.types';

export type MedicationTileProps = {
  item: MedicationDataPoint;
};

export type MedicationTileStyle = {
  container: ViewStyle;
  titleContainer: ViewStyle;
  timeContainer: ViewStyle;
  titleText: TextStyle;
  medicationsContainer: ViewStyle;
  medicationContainer: ViewStyle;
  medicationText: TextStyle;
};
