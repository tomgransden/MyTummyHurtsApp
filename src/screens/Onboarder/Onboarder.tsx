import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  FlatList,
  ViewToken,
  TouchableWithoutFeedback,
} from 'react-native';
import Animated, {
  AnimatedRef,
  Extrapolation,
  SharedValue,
  interpolate,
  interpolateColor,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
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
    text: 'Rate your pain',
    textColor: 'white',
    backgroundColor: '#bfa2c8',
  },
  {
    id: 2,
    image:
      'https://www.vashtiperformance.com.au/images/4da56adf960aaa3c93108caf95d5e67f4f434ffeb84af38f3c1840050e0df1b390e715bb91ec20658aa7bd37f437b0e299b78b210027c38f3e0503_1280.png?_cchid=632cc022f5f1ce08ae225dc0b244a1d2',
    text: 'Log your mood',
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

const Dot = ({ x, index }: { x: SharedValue<number>; index: number }) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const animatedDotStyle = useAnimatedStyle(() => {
    const widthAnimation = interpolate(
      x.value,
      [(index - 1) * SCREEN_WIDTH, index * SCREEN_WIDTH, (index + 1) * SCREEN_WIDTH],
      [10, 20, 10],
      Extrapolation.CLAMP
    );

    const opacityAnimation = interpolate(
      x.value,
      [(index - 1) * SCREEN_WIDTH, index * SCREEN_WIDTH, (index + 1) * SCREEN_WIDTH],
      [0.5, 1, 0.5],
      Extrapolation.CLAMP
    );

    const scaleAnimation = interpolate(
      x.value,
      [(index - 1) * SCREEN_WIDTH, index * SCREEN_WIDTH, (index + 1) * SCREEN_WIDTH],
      [0.7, 1, 0.7],
      Extrapolation.CLAMP
    );

    return {
      width: widthAnimation,
      opacity: opacityAnimation,
      transform: [{ scale: scaleAnimation }],
    };
  });

  return (
    <Animated.View
      style={[
        {
          height: 10,
          backgroundColor: 'white',
          borderRadius: 5,
          marginHorizontal: 10,
        },
        animatedDotStyle,
      ]}
    />
  );
};

const Pagination = ({ data, x }) => {
  return (
    <Animated.View
      style={{ flexDirection: 'row', height: 40, justifyContent: 'center', alignItems: 'center' }}>
      {data.map((_, index) => {
        return <Dot key={index} index={index} x={x} />;
      })}
    </Animated.View>
  );
};

const CustomButton = ({
  flatListRef,
  flatListIndex,
  dataLength,
  x,
}: {
  dataLength: number;
  x: SharedValue<number>;
  flatListRef: AnimatedRef<FlatList<OnboarderData>>;
  flatListIndex: SharedValue<number>;
}) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const navigation = useNavigation();

  const animatedColor = useAnimatedStyle(() => {
    const color = interpolateColor(
      x.value,
      [0, SCREEN_WIDTH, 2 * SCREEN_WIDTH],
      ['#ED8380', '#FF95E1', '#D9C990']
    );

    return { backgroundColor: color };
  });

  const animatedWidth = useAnimatedStyle(() => {
    return {
      width: flatListIndex.value === dataLength - 1 ? withSpring(180) : withSpring(60),
    };
  });

  const animatedArrow = useAnimatedStyle(() => {
    return {
      opacity: flatListIndex.value === dataLength - 1 ? withTiming(0) : withTiming(1),
      transform: [
        { translateX: flatListIndex.value === dataLength - 1 ? withTiming(100) : withTiming(0) },
      ],
    };
  });

  const animatedText = useAnimatedStyle(() => {
    return {
      opacity: flatListIndex.value === dataLength - 1 ? withTiming(1) : withTiming(0),
      transform: [
        { translateX: flatListIndex.value === dataLength - 1 ? withTiming(0) : withTiming(-100) },
      ],
    };
  });

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log(flatListIndex.value);
        if (flatListIndex.value < dataLength - 1) {
          flatListRef.current?.scrollToIndex({ index: flatListIndex.value + 1 });
        } else {
          navigation.navigate('SignedOut');
        }
      }}>
      <Animated.View
        style={[
          {
            padding: 10,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            height: 60,
          },
          animatedColor,
          animatedWidth,
        ]}>
        <Animated.Text
          style={[
            { color: 'black', position: 'absolute', fontSize: 16, fontFamily: 'Rubik' },
            animatedText,
          ]}>
          Get started
        </Animated.Text>
        <Animated.View style={[{ justifyContent: 'center', alignItems: 'center' }, animatedArrow]}>
          <MaterialCommunityIcons
            style={{ position: 'absolute' }}
            color={'white'}
            size={30}
            name="arrow-right"
          />
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const Onboarder = () => {
  const flatListRef = useAnimatedRef<FlatList<OnboarderData>>();
  const x = useSharedValue(0);
  const flatListIndex = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });

  const onViewableItemsChanged = ({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems?.[0] && viewableItems[0].index !== null) {
      flatListIndex.value = viewableItems[0].index;
    }
  };

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
        renderItem={({ item, index }) => <RenderItem x={x} item={item} index={index} />}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          minimumViewTime: 300,
          viewAreaCoveragePercentThreshold: 10,
        }}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          left: 0,
          right: 0,
          marginHorizontal: 30,
          paddingVertical: 30,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Pagination data={data} x={x} />
        <CustomButton
          flatListIndex={flatListIndex}
          flatListRef={flatListRef}
          dataLength={data.length}
          x={x}
        />
      </View>
    </View>
  );
};

export default Onboarder;
