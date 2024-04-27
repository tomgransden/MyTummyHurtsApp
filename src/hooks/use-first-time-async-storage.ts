import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export const useFirstTimeAsyncStorage = () => {
  const { getItem, setItem } = useAsyncStorage('isFirstTime');

  const [onboarderStatus, setOnboarderStatus] = useState<string | null | undefined>();

  useEffect(() => {
    const getStatus = async () => await getItem();

    getStatus().then((item) => {
      setOnboarderStatus(item);
    });
  }, []);

  const setShownOnboarder = async () => {
    await setItem('true');
  };

  return { onboarderStatus, setShownOnboarder };
};
