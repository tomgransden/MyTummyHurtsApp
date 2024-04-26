import { View, Text, Image, useWindowDimensions, FlatList } from 'react-native';
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { styles } from './Onboarder.style';

type OnboarderData = {
  id: number;
  text: string;
  image: string;
  textColor: string;
  backgroundColor: string;
};

const data: OnboarderData[] = [
  {
    id: 1,
    image:
      'https://static.vecteezy.com/system/resources/previews/033/859/580/original/hungry-character-clipart-png.png',
    text: 'Measure your pain',
    textColor: 'white',
    backgroundColor: '#bfa2c8',
  },
  {
    id: 2,
    image:
      'https://www.vashtiperformance.com.au/images/4da56adf960aaa3c93108caf95d5e67f4f434ffeb84af38f3c1840050e0df1b390e715bb91ec20658aa7bd37f437b0e299b78b210027c38f3e0503_1280.png?_cchid=632cc022f5f1ce08ae225dc0b244a1d2',
    text: 'Log your moods',
    textColor: 'white',
    backgroundColor: 'mediumpurple',
  },
  {
    id: 3,
    image:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c7663473-537a-41ba-9555-f5c404622711/d8csv5h-77837356-6a2f-484b-a97c-6276f900ea02.png/v1/fill/w_1024,h_1024/burrito_by_countessmrose_d8csv5h-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2M3NjYzNDczLTUzN2EtNDFiYS05NTU1LWY1YzQwNDYyMjcxMVwvZDhjc3Y1aC03NzgzNzM1Ni02YTJmLTQ4NGItYTk3Yy02Mjc2ZjkwMGVhMDIucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ZDfCfPw6OeRdg8gRtP4t7D3CDcaieVGNCHxXMhdZB88',
    text: 'Track your meals',
    textColor: 'white',
    backgroundColor: '#bfa2c8',
  },
];

const RenderItem = ({
  item,
  index,
  x,
}: {
  item: OnboarderData;
  index: number;
  x: SharedValue<number>;
}) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const imageStyle = useAnimatedStyle(() => {
    const translateYAnimation = interpolate(
      x.value,
      [(index - 1) * SCREEN_WIDTH, index * SCREEN_WIDTH, (index + 1) * SCREEN_WIDTH],
      [200, 0, -200],
      Extrapolation.CLAMP
    );

    return { transform: [{ translateY: translateYAnimation }] };
  });

  const circleAnimation = useAnimatedStyle(() => {
    const scale = interpolate(
      x.value,
      [(index - 1) * SCREEN_WIDTH, index * SCREEN_WIDTH, (index + 1) * SCREEN_WIDTH],
      [1, 4, 4],
      Extrapolation.CLAMP
    );

    return {
      transform: [{ scale }],
    };
  });
  return (
    <View style={[styles.container, { width: SCREEN_WIDTH }]}>
      <View style={styles.circleContainer}>
        <Animated.View
          style={[
            {
              width: SCREEN_WIDTH,
              height: SCREEN_WIDTH,
              backgroundColor: item.backgroundColor,
              borderRadius: SCREEN_WIDTH / 2,
            },
            circleAnimation,
          ]}
        />
      </View>
      <Animated.View style={imageStyle}>
        <Image
          source={{ uri: item.image }}
          style={{ width: SCREEN_WIDTH * 0.8, height: SCREEN_WIDTH * 0.8 }}
        />
      </Animated.View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 44,
          fontWeight: '700',
          marginBottom: 10,
          marginHorizontal: 20,
          color: item.textColor,
          fontFamily: 'Rubik',
        }}>
        {item.text}
      </Text>
    </View>
  );
};

const Onboarder = () => {
  const flatListRef = useAnimatedRef<FlatList<OnboarderData>>();
  const x = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });

  return (
    <View style={{ flex: 1 }}>
      <Animated.FlatList
        onScroll={onScroll}
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        horizontal
        scrollEventThrottle={16}
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item, index }) => {
          return <RenderItem x={x} item={item} index={index} />;
        }}
      />
    </View>
  );
};

export default Onboarder;
