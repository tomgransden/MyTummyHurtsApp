import { TouchableOpacity, Text } from 'react-native';

import styles from './OuterCircle.style';

interface OuterCircleProps {
  index: number;
  degreesPerSegment: number;
  onPress: () => void;
  text: string;
}

const OuterCircle = ({
  index,
  degreesPerSegment,
  onPress,
  text,
}: OuterCircleProps): JSX.Element => (
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
