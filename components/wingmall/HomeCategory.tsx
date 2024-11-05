import { View, Text } from 'react-native';
import React from 'react';
import { mallCategories } from '@/constants/dummy';
import { Image } from 'expo-image';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
} from 'react-native-reanimated';
import PressableButton from '../PressableButton';
import { Href, useRouter } from 'expo-router';

enum CategoryPath {
  EXPRESS = 'express',
  GROCERY = 'grocery',
  PICK_UP = 'pickup',
  MOVIE_TICKET = 'movieTicket',
  GIFT_CARD = 'gift-card',
}

export default function HomeCategory() {
  const router = useRouter();
  const primaryColor = '#013593';
  const scrollX = useSharedValue(0);

  const maxScroll = mallCategories.length * 50 - 50;

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

  const animatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(scrollX.value, [0, maxScroll], [0, 55]);

    return {
      transform: [{ translateX }],
    };
  });

  const onPressCategory = (path: string) => {
    console.log('path', path);
    switch (path) {
      case CategoryPath.EXPRESS:
        router.push('wingMall/express' as Href);
        break;
      case CategoryPath.GROCERY:
        router.push('wingMall/grocery' as Href);
        break;
      case CategoryPath.PICK_UP:
        router.push('wingMall/pickup' as Href);
        break;
      case CategoryPath.MOVIE_TICKET:
        router.push('wingMall/movie' as Href);
        break;
      case CategoryPath.GIFT_CARD:
        router.push('wingMall/giftCard' as Href);
        break;
      default:
        router.push('wingMall/express' as Href);
    }
  };

  return (
    <View style={{ gap: 15 }}>
      <Animated.FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={mallCategories}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          gap: 10,
          paddingHorizontal: 15,
        }}
        renderItem={({ item }) => (
          <PressableButton
            onPress={() => onPressCategory(item.path)}
            style={{
              flexDirection: 'column',
              backgroundColor: 'white',
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              gap: 5,
            }}
          >
            <Image
              source={{
                uri: item.icon,
              }}
              style={{
                width: 40,
                height: 40,
              }}
              contentFit="contain"
            />
            <Text
              style={{
                fontSize: 11,
                color: 'gray',
              }}
            >
              {item.name}
            </Text>
          </PressableButton>
        )}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      />

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            height: 6,
            width: 50,
            borderRadius: 10,
            overflow: 'hidden',
            backgroundColor: 'lightgray',
          }}
        >
          <Animated.View
            style={[
              {
                backgroundColor: primaryColor,
                width: 25,
                height: 6,
                borderRadius: 5,
              },
              animatedStyle,
            ]}
          />
        </View>
      </View>
    </View>
  );
}
