import { useRef } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  StatusBar,
  Text,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { tvShows } from '@/constants/dummy';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
export default function MoviesScreen() {
  const router = useRouter();
  const { width } = Dimensions.get('screen');
  const imageWidth = width * 0.7;
  const imageHeight = imageWidth * 1.54;
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
      <StatusBar hidden />
      <View style={StyleSheet.absoluteFillObject}>
        {tvShows.map((movie, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });
          return (
            <Animated.Image
              key={`image-${movie.id}`}
              source={{ uri: movie.poster }}
              style={[
                StyleSheet.absoluteFillObject,
                {
                  opacity,
                },
              ]}
              blurRadius={5}
            />
          );
        })}
      </View>
      <Animated.FlatList
        data={tvShows}
        horizontal
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        decelerationRate={0}
        bounces={false}
        onEndReachedThreshold={0.1}
        keyExtractor={(item) => item.id.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
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
                  width: imageWidth,
                  height: imageHeight,
                  borderRadius: 16,
                }}
                transition={500}
              />
              <TouchableOpacity
                onPress={() => router.back()}
                style={{
                  padding: 24,
                  alignItems: 'center',
                  width: imageWidth,
                  borderBottomLeftRadius: 16,
                  gap: 8,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'white',
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'white',
                  }}
                >
                  {item.genre}
                </Text>
              </TouchableOpacity>
            </Animated.View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
