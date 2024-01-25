import { MaterialCommunityIcons } from '@expo/vector-icons';

export enum IRecordType {
  Medication,
  Food,
  Mood,
  Pain,
}

type IDataPointBase = {
  createdDate: Date;
};

export type IMedicationDataPoint = IDataPointBase & {
  type: IRecordType.Medication;
  metadata: {
    medications: string[];
  };
};

export type IFoodDataPoint = IDataPointBase & {
  type: IRecordType.Food;
  metadata: {
    image: string;
    description: string;
  };
};

export type IMoodDataPoint = IDataPointBase & {
  type: IRecordType.Mood;
  metadata: {
    mood: string;
    moodIcon: keyof (typeof MaterialCommunityIcons)['glyphMap'];
  };
};

export type IPainDataPoint = IDataPointBase & {
  type: IRecordType.Pain;
  metadata: {
    painScore: number;
    painDescription?: string;
  };
};

export type IDataPoint = IMedicationDataPoint | IFoodDataPoint | IMoodDataPoint | IPainDataPoint;
