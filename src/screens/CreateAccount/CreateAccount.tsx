import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { View } from 'react-native';

import Button from '../../components/Button/Button';
import TextInput from '../../components/TextInput/TextInput';

const CreateAccount = () => {
  const createAccount = async () => {
    const authResult = await auth().createUserWithEmailAndPassword(
      `testuser${Math.floor(Math.random() * 100000)}@maildrop.cc`,
      'Password123'
    );

    await firestore().collection('users').doc(authResult.user.uid).set({});
  };

  return (
    <View style={{ marginTop: 20, marginHorizontal: 12 }}>
      <TextInput placeholder="Email address" />
      <View style={{ height: 10 }} />
      <TextInput
        style={{ marginBottom: 16 }}
        placeholder="Password"
        textContentType="password"
        secureTextEntry
      />
      <Button onPress={createAccount} title="Create account" />
    </View>
  );
};

export default CreateAccount;
