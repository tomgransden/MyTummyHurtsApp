import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from 'react-native';

import { RootStackParamList } from '../../App';

const circleMenuOptions = [
  { title: 'Medication', pageToNavigateTo: '' },
  { title: 'Food', pageToNavigateTo: '' },
  { title: 'Bowel movements', pageToNavigateTo: '' },
  { title: 'Weight', pageToNavigateTo: '' },
  { title: 'Mood', pageToNavigateTo: '' },
  { title: 'More', pageToNavigateTo: '' },
  { title: 'More 2', pageToNavigateTo: '' },
];

type Props = NativeStackScreenProps<RootStackParamList, 'MainMenu'>;

const MenuScreen = ({ navigation, route }: Props): JSX.Element => {
  const tot = circleMenuOptions.length;
  const h = 360 / tot;
  const n = circleMenuOptions.length;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.circle}>
        {Array(n)
          .fill(null, 0, tot)
          .map((_, i) => i)
          .map((i) => (
            <TouchableOpacity
              key={i}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                position: 'absolute',
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                transform: [{ rotate: i * h + 90 + 'deg' }, { translateX: -140 }],
              }}>
              <Text
                style={{
                  transform: [{ rotate: -(i * h + 90) + 'deg' }],
                  fontFamily: 'RubikBubbles-Regular',
                  textAlign: 'center',
                }}>
                {circleMenuOptions?.[i]?.title}
              </Text>
            </TouchableOpacity>
          ))}
        <View style={styles.circle2}>
          <Text
            style={{
              fontFamily: 'RubikBubbles-Regular',
              fontSize: 20,
              color: 'black',
              textAlign: 'center',
            }}>
            Choose an entry to log
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={{
            width: 160,
            alignSelf: 'center',
            backgroundColor: 'mediumpurple',
            borderWidth: 1,
            borderColor: 'mediumpurple',
            borderRadius: 4,
            padding: 8,
            marginBottom: 16,
          }}
          onPress={() => navigation.navigate('Summary')}>
          <Text
            style={{
              fontFamily: 'RubikBubbles-Regular',
              fontSize: 20,
              color: 'white',
              textAlign: 'center',
            }}>
            Summary
          </Text>
        </TouchableOpacity>
        <View
          style={{
            width: 160,
            alignSelf: 'center',
            backgroundColor: 'mediumpurple',
            borderWidth: 1,
            borderColor: 'mediumpurple',
            borderRadius: 4,
            padding: 8,
            marginBottom: 16,
          }}>
          <Text
            style={{
              fontFamily: 'RubikBubbles-Regular',
              fontSize: 20,
              color: 'white',
              textAlign: 'center',
            }}>
            My Profile
          </Text>
        </View>
        <View
          style={{
            width: 160,
            alignSelf: 'center',
            backgroundColor: 'mediumpurple',
            borderWidth: 1,
            borderColor: 'mediumpurple',
            borderRadius: 4,
            padding: 8,
            marginBottom: 16,
          }}>
          <Text
            style={{
              fontFamily: 'RubikBubbles-Regular',
              fontSize: 20,
              color: 'white',
              textAlign: 'center',
            }}>
            Settings
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bfa2c8',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 120,
  },
  circle2: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    height: 160,
    width: 160,
    borderRadius: 80,
  },
});

export default MenuScreen;
