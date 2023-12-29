import { TouchableOpacity, Text } from 'react-native';

import styles from './OuterCircle.style';
import { IOuterCircleProps } from './OuterCircle.type';

const OuterCircle = ({ index, degreesPerSegment, onPress, text }: IOuterCircleProps) => (
  <TouchableOpacity
    style={[
      styles.outerCircleContainer,
      {
        transform: [{ rotate: index * degreesPerSegment + 90 + 'deg' }, { translateX: 140 }],
      },
    ]}
    onPress={onPress}>
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
);

export default OuterCircle;
