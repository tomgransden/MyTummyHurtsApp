import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Button, TextInput, View } from 'react-native';

const CreateAccount = () => {
  const createAccount = async () => {
    const authResult = await auth().createUserWithEmailAndPassword(
      `testuser${Math.floor(Math.random() * 100000)}@maildrop.cc`,
      'Password123'
    );

    await firestore().collection('users').doc(authResult.user.uid).set({});
  };

  return (
    <View>
      <TextInput placeholder="Email address" />
      <TextInput placeholder="Password" textContentType="password" secureTextEntry />
      <Button onPress={createAccount} title="Create account" />
    </View>
  );
};

export default CreateAccount;
