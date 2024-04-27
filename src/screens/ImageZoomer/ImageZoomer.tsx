import { RouteProp } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

import { RootStackParamList } from '../../navigation/MyTummyHurtsNavigation.type';

const ImageZoomer = ({ route }: { route: RouteProp<RootStackParamList, 'ImageZoomer'> }) => {
  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);

  const pinchGesture = Gesture.Pinch()
    .onUpdate((e) => {
      const lessThan1 = savedScale.value * e.scale < 1;
      scale.value = lessThan1 ? 1 : savedScale.value * e.scale;
    })
    .onEnd(() => {
      savedScale.value = scale.value;
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <GestureDetector gesture={pinchGesture}>
      <Animated.Image
        source={{ uri: route.params.url }}
        style={[
          { width: Dimensions.get('screen').width, height: Dimensions.get('screen').width },
          animatedStyle,
        ]}
      />
    </GestureDetector>
  );
};

export default ImageZoomer;
