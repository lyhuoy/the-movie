import { View, Dimensions, StatusBar } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';
import Constants from 'expo-constants';
import WalletAndWingpoint from '@/components/wingmall/WalletAndWingpoint';
import FoodAndShopping from '@/components/wingmall/FoodAndShopping';
import HomeCategory from '@/components/wingmall/HomeCategory';
import BellIcon from '@/components/wingmall/BellIcon';
import ProductList from '@/components/wingmall/ProductList';
import { productData } from '@/constants/dummy';

export default function HomeWingMall() {
  const { width, height } = Dimensions.get('screen');
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const IMAGE_HEIGHT = height / 4;
  const STATUS_BAR_HEIGHT = Constants.statusBarHeight;

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMAGE_HEIGHT, 0, 0],
            [-IMAGE_HEIGHT, 0, 1],
            Extrapolation.CLAMP
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-STATUS_BAR_HEIGHT, 0, STATUS_BAR_HEIGHT],
            [1, 1, 1],
            Extrapolation.EXTEND
          ),
        },
      ],
    };
  });

  const animatedOpacity = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollOffset.value,
        [-Constants.statusBarHeight, 0, Constants.statusBarHeight],
        [0, 0, 1],
        Extrapolation.CLAMP
      ),
    };
  });

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <StatusBar barStyle="default" />
      <Animated.View
        style={[
          {
            height: Constants.statusBarHeight,
            backgroundColor: 'white',
            position: 'absolute',
            width: '100%',
            zIndex: 100,
          },
          animatedOpacity,
        ]}
      />
      <BellIcon />
      <Animated.ScrollView
        style={{ flex: 1 }}
        ref={scrollRef}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 30,
        }}
      >
        <Animated.View style={imageAnimatedStyle}>
          <Image
            source={{
              uri: 'https://i.ytimg.com/vi/0UalM4z7lg0/maxresdefault.jpg',
            }}
            style={{
              width,
              height: IMAGE_HEIGHT,
              position: 'absolute',
            }}
          />
        </Animated.View>
        <View
          style={{
            paddingTop: IMAGE_HEIGHT - 40,
            gap: 15,
          }}
        >
          <View
            style={{
              paddingHorizontal: 15,
              gap: 15,
            }}
          >
            <WalletAndWingpoint />
            <FoodAndShopping />
          </View>
          <HomeCategory />
          <ProductList
            title="Delicious Deals: Savor 50% Off Your Favorites!"
            productData={productData}
          />
          <ProductList
            title="Taste the Savings: Buy One, Get One Free on Select Menu Items!"
            productData={productData}
          />
        </View>
      </Animated.ScrollView>
    </View>
  );
}
