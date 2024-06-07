import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

import { useToast } from './use-toast';

export const useFirstTimeAsyncStorage = () => {
  const { getItem, setItem } = useAsyncStorage('isFirstTime');

  const [onboarderStatus, setOnboarderStatus] = useState<string | null | undefined>();

  const { showErrorToast } = useToast();

  useEffect(() => {
    const getStatus = async () => await getItem();

    getStatus()
      .then((item) => {
        setOnboarderStatus(item);
      })
      .catch(() => {
        showErrorToast('Unable to get onboarder status');
      });
  }, []);

  const setShownOnboarder = async () => {
    await setItem('true').catch(() => {
      showErrorToast('Unable to set onboarder status');
    });
  };

  return { onboarderStatus, setShownOnboarder };
};
