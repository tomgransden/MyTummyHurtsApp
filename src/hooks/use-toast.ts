import * as Constants from 'expo-constants';
import Toast from 'react-native-toast-message';
export const useToast = () => {
  const showErrorToast = (msg?: string) => {
    Toast.show({
      text1: 'An error occurred',
      text2: msg,
      type: 'error',
      topOffset: Constants.default.statusBarHeight,
    });
  };
  return { showErrorToast };
};
