import {
  View,
  Text,
  Dimensions,
  Animated,
  FlatList,
  Platform,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { kdramaSeries } from '@/constants/dummy';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';

export type MovieType = {
  id: number;
  title: string;
  poster: string;
  genre: string;
  releaseDate: string;
  backgroundColor?: string;
};

export default function MovieApp() {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const { width, height } = Dimensions.get('screen');
  const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;
  const BACKDROP_HEIGHT = height * 0.65;
  const imageHeight = ITEM_SIZE * 1.54;

  return (
    <View style={styles.container}>
      <View style={{ height: BACKDROP_HEIGHT, width, position: 'absolute' }}>
        <FlatList
          data={kdramaSeries}
          keyExtractor={(item) => item.id + '-backdrop'}
          removeClippedSubviews={false}
          contentContainerStyle={{ width, height: BACKDROP_HEIGHT }}
          renderItem={({ item, index }) => {
            if (!item.poster) {
              return null;
            }

            const inputRange = [
              (index - 1) * width,
              (index - 1) * width,
              index * width,
            ];

            const translateX = scrollX.interpolate({
              inputRange,
              outputRange: [-width, 0, width],
            });

            return (
              <Animated.View
                removeClippedSubviews={false}
                style={{
                  position: 'absolute',
                  width: translateX,
                  height: BACKDROP_HEIGHT,
                  overflow: 'hidden',
                }}
              >
                <Image
                  source={{ uri: item.poster }}
                  style={{
                    width,
                    height: BACKDROP_HEIGHT,
                    position: 'absolute',
                  }}
                  blurRadius={1}
                />
                <LinearGradient
                  colors={['rgba(0, 0, 0, 0)', 'white']}
                  style={{
                    height: BACKDROP_HEIGHT,
                    width,
                    position: 'absolute',
                    bottom: 0,
                  }}
                />
              </Animated.View>
            );
          }}
        />
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'white']}
          style={{
            height: BACKDROP_HEIGHT,
            width,
            position: 'absolute',
            bottom: 0,
          }}
        />
      </View>

      <Animated.FlatList
        data={kdramaSeries}
        horizontal
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        decelerationRate={0}
        bounces={false}
        onEndReachedThreshold={0.1}
        initialNumToRender={2}
        maxToRenderPerBatch={2}
        windowSize={3}
        keyExtractor={(item) => item.id.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],

          { useNativeDriver: false }
        )}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [0, -50, 0],
          });

          return (
            <Animated.View
              key={item.id}
              style={[
                {
                  width,
                  justifyContent: 'center',
                  alignItems: 'center',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowOpacity: 0.5,
                  shadowRadius: 20,
                },
                { transform: [{ translateY }] },
              ]}
            >
              <Image
                cachePolicy={'memory'}
                source={{ uri: item.poster }}
                style={{
                  width: ITEM_SIZE,
                  height: imageHeight,
                  borderRadius: 16,
                }}
                transition={500}
              />
              <View
                style={{
                  padding: 24,
                  alignItems: 'center',
                  width: ITEM_SIZE,
                  borderBottomLeftRadius: 16,
                  gap: 8,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'black',
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'black',
                  }}
                >
                  {item.genre}
                </Text>
              </View>
            </Animated.View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  posterImage: {
    width: '100%',

    resizeMode: 'cover',
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
});
