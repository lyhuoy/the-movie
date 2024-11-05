import { View, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { animeSeries } from '@/constants/dummy';
import { MovieType } from './movieApp';
import { Image } from 'expo-image';

const { width } = Dimensions.get('screen');
const _imageWidth = width * 0.7;
const _imageHeight = _imageWidth * 1.76;
const _spacing = 12;

function Photo({
  item,
  index,
  scrollX,
}: {
  item: MovieType;
  index: number;
  scrollX: SharedValue<number>;
}) {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            scrollX.value,
            [index - 1, index, index + 1],
            [1.8, 1, 1.8],
            Extrapolation.CLAMP
          ),
        },
        {
          rotate: `${interpolate(
            scrollX.value,
            [index - 1, index, index + 1],
            [15, 0, -15],
            Extrapolation.CLAMP
          )}deg`,
        },
      ],
      //   opacity: interpolate(
      //     scrollX.value,
      //     [index - 1, index, index + 1],
      //     [0.5, 1, 0.5],
      //     Extrapolation.CLAMP
      //   ),
    };
  });

  return (
    <View
      style={[
        {
          width: _imageWidth,
          height: _imageHeight,
          overflow: 'hidden',
          borderRadius: 16,
        },
      ]}
    >
      <Animated.View
        style={[
          {
            flex: 1,
          },
          animatedStyle,
        ]}
      >
        <Image
          source={{ uri: item.poster }}
          transition={500}
          style={{
            flex: 1,
          }}
        />
      </Animated.View>
    </View>
  );
}

function BackdropPhoto({
  photo,
  index,
  scrollX,
}: {
  photo: string;
  index: number;
  scrollX: SharedValue<number>;
}) {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollX.value,
        [index - 1, index, index + 1],
        [0, 1, 0],
        Extrapolation.CLAMP
      ),
    };
  });

  return (
    <Animated.View style={[StyleSheet.absoluteFillObject, animatedStyle]}>
      <Image source={{ uri: photo }} style={StyleSheet.absoluteFillObject} />
    </Animated.View>
  );
}

export default function PixelWallpaper() {
  const scrollX = useSharedValue(0);
  const onScrollHandle = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x / (_imageWidth + _spacing);
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}
    >
      <View style={StyleSheet.absoluteFillObject}>
        {animeSeries.map((item, index) => (
          <BackdropPhoto
            key={item.id}
            photo={item.poster}
            index={index}
            scrollX={scrollX}
          />
        ))}
      </View>
      <Animated.FlatList
        onScroll={onScrollHandle}
        horizontal
        scrollEventThrottle={16.6}
        data={animeSeries}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        snapToInterval={_imageWidth + _spacing}
        decelerationRate="fast"
        contentContainerStyle={{
          paddingHorizontal: (width - _imageWidth) / 2,
          gap: _spacing,
        }}
        style={{
          flexGrow: 0,
        }}
        renderItem={({ item, index }) => (
          <Photo item={item} index={index} scrollX={scrollX} />
        )}
      />
    </View>
  );
}
