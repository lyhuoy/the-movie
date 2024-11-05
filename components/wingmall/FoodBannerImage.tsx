import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import PressableButton from '../PressableButton';
import { Image } from 'expo-image';
import { primaryColor } from '@/constants/Colors';

type FoodBannerImageProps = {
  image: string;
  index: number;
  scrollX: SharedValue<number>;
  text: string;
};

const { width } = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.88;
const ITEM_HEIGHT = width * 0.33;
const ITEM_SPACING = 15;
export default function FoodBannerImage({
  image,
  index,
  scrollX,
  text,
}: FoodBannerImageProps) {
  const animatedOpacity = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollX.value,
        [index - 1, index, index + 1],
        [0.5, 1, 0.5],
        Extrapolation.CLAMP
      ),
    };
  });

  return (
    <Animated.View
      style={[
        animatedOpacity,
        {
          width: ITEM_WIDTH,
          height: ITEM_HEIGHT,
          borderRadius: 20,
          overflow: 'hidden',
        },
      ]}
    >
      <Image
        source={image}
        style={{
          flex: 1,
        }}
        transition={500}
      />
      <PressableButton
        style={{
          backgroundColor: primaryColor,
          paddingVertical: 8,
          paddingHorizontal: ITEM_SPACING,
          borderRadius: 20,
          position: 'absolute',
          bottom: ITEM_SPACING,
          right: ITEM_SPACING,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontWeight: '600',
            color: 'white',
          }}
        >
          {text}
        </Text>
      </PressableButton>
    </Animated.View>
  );
}
