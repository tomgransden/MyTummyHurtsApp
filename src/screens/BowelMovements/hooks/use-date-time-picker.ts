import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useState } from 'react';

export const useDateTimePicker = () => {
  const [dateTime, setDateTime] = useState<Date>(new Date());
  const [userSelectedDate, setUserSelectedDate] = useState(false);
  const [showPicker, setShowPicker] = useState(false);

  const chooseTime = () => {
    setShowPicker(true);
  };

  const selectTime = (event: DateTimePickerEvent, date: Date) => {
    setShowPicker(false);

    if (date && event.type === 'set') {
      setUserSelectedDate(true);
      setDateTime(date);
    }
  };

  return { chooseTime, dateTime, selectTime, showPicker, userSelectedDate };
};
