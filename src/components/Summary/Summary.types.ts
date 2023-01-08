import { ViewStyle } from 'react-native';

export enum RecordType {
  Medication,
  Food,
}

type DataPointBase = {
  createdDate: Date;
};

export type MedicationDataPoint = DataPointBase & {
  type: RecordType.Medication;
  metadata: {
    medications: string[];
  };
};

export type FoodDataPoint = DataPointBase & {
  type: RecordType.Food;
  metadata: {
    image: string;
    description: string;
  };
};

export type DataPoint = MedicationDataPoint | FoodDataPoint;

export type SummaryStyle = {
  container: ViewStyle;
  scrollViewContainer: ViewStyle;
};
