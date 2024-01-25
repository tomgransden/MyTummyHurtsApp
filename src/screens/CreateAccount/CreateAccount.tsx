import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useState } from 'react';
import { View } from 'react-native';

import Button from '../../components/Button/Button';
import TextInput from '../../components/TextInput/TextInput';

const CreateAccount = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const createAccount = async () => {
    setLoading(true);
    const authResult = await auth().createUserWithEmailAndPassword(username, password);

    await firestore().collection('users').doc(authResult.user.uid).set({});

    setLoading(false);
  };

  return (
    <View style={{ marginTop: 20, marginHorizontal: 12 }}>
      <TextInput
        onChangeText={(text) => setUsername(text)}
        style={{ marginBottom: 16 }}
        placeholder="Email address"
      />
      <TextInput
        onChangeText={(text) => setPassword(text)}
        style={{ marginBottom: 16 }}
        placeholder="Password"
        textContentType="password"
        secureTextEntry
      />
      <Button loading={loading} onPress={createAccount} title="Create account" />
    </View>
  );
};

export default CreateAccount;
