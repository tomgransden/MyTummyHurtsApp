import { useAsyncStorage } from '@react-native-async-storage/async-storage';

export const useFirstTimeAsyncStorage = () => {
  const firstTimeAsyncStorageMethods = useAsyncStorage('isFirstTime');

  return { ...firstTimeAsyncStorageMethods };
};
