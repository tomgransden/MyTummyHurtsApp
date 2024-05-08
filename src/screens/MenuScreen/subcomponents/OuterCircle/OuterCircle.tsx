import { TouchableOpacity, Text } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

import styles from './OuterCircle.style';
import { IOuterCircleProps } from './OuterCircle.type';

const OuterCircle = ({ index, degreesPerSegment, onPress, text }: IOuterCircleProps) => (
  <Animated.View
    entering={FadeIn.delay(250 + index * 200)}
    style={[
      styles.outerCircleContainer,
      {
        transform: [{ rotate: index * degreesPerSegment + 90 + 'deg' }, { translateX: 135 }],
      },
    ]}>
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      <Text
        style={[
          styles.outerCircleText,
          {
            transform: [{ rotate: -(index * degreesPerSegment + 90) + 'deg' }],
          },
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  </Animated.View>
);

export default OuterCircle;
