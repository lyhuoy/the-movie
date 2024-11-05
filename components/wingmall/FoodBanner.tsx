import { Dimensions, View } from 'react-native';
import React from 'react';
import { wingmallFoodBanner } from '@/constants/dummy';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import FoodBannerImage from './FoodBannerImage';

const { width } = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.88;
const ITEM_SPACING = 15;

export default function FoodBanner() {
  const scrollX = useSharedValue(0);
  const onScrollHandle = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x / (ITEM_WIDTH + ITEM_SPACING);
  });

  return (
    <View>
      <Animated.FlatList
        onScroll={onScrollHandle}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={wingmallFoodBanner}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          padding: ITEM_SPACING,
          gap: ITEM_SPACING,
        }}
        snapToInterval={ITEM_WIDTH + ITEM_SPACING + 0.16}
        scrollEventThrottle={16}
        decelerationRate="fast"
        renderItem={({ item, index }) => {
          return (
            <FoodBannerImage
              image={item.image}
              index={index}
              scrollX={scrollX}
              text={item.text}
            />
          );
        }}
      />
    </View>
  );
}
