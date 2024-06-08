import crashlytics from '@react-native-firebase/crashlytics';

export const useCrashReporting = () => {
  const setUser = (userId: string) => {
    console.log(crashlytics().isCrashlyticsCollectionEnabled);
    crashlytics().setUserId(userId);
  };

  const logToProvider = (msg: string) => {
    crashlytics().log(msg);
  };

  const logErrorToProvider = (error: Error) => {
    crashlytics().recordError(error);
  };

  return { logToProvider, logErrorToProvider, setUser };
};
