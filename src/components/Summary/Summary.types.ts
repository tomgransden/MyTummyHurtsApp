export enum IRecordType {
  Medication,
  Food,
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

export type IDataPoint = IMedicationDataPoint | IFoodDataPoint;
