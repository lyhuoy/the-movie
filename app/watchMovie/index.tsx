import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import MovieTrendingList from '@/components/MovieTrendingList';
import Animated, {
  Extrapolation,
  FadeInDown,
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import { animeSeries, kdramaSeries, movies, tvShows } from '@/constants/dummy';
import ContinueToWatch from '@/components/ContinueToWatch';
import MovieSeriesList from '@/components/MovieSeriesList';
import Constant from 'expo-constants';
import { BlurView } from 'expo-blur';

export default function HomeMovie() {
  const router = useRouter();
  const { width, height } = Dimensions.get('screen');
  const IMAGE_HEIGHT = height / 2;
  const SHADOWN_HEIGHT = IMAGE_HEIGHT;

  const onTrendingPress = () => {
    router.push('/movies');
  };

  const onSeriesPress = () => {
    router.push('/movieApp');
  };

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMAGE_HEIGHT, 0, IMAGE_HEIGHT],
            [-IMAGE_HEIGHT, 0, IMAGE_HEIGHT * 0.75],
            Extrapolation.CLAMP
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-IMAGE_HEIGHT, 0, IMAGE_HEIGHT],
            [4, 1, 1],
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
        [-IMAGE_HEIGHT, 0, IMAGE_HEIGHT],
        [1, 1, 0],
        Extrapolation.CLAMP
      ),
    };
  });

  const headerOpacity = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollOffset.value,
        [-IMAGE_HEIGHT, 0, IMAGE_HEIGHT],
        [0, 0, 1],
        Extrapolation.CLAMP
      ),
    };
  });

  return (
    <>
      <Animated.View
        style={[
          {
            backgroundColor: '#000',
            height: Constant.statusBarHeight,
            width: '100%',
            position: 'absolute',
            zIndex: 100,
          },
          headerOpacity,
        ]}
      />

      <Animated.View
        style={[
          {
            position: 'absolute',
            top: Constant.statusBarHeight,
            zIndex: 100,
            paddingHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          },
          animatedOpacity,
        ]}
      >
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: '#fff',
            borderRadius: 50,
          }}
        >
          <Image
            source={{
              uri: 'https://static.hitek.fr/img/actualite/ill_m/1010389431/couvhitekretourmilesmorales.jpg',
            }}
            style={{ width: 45, height: 45, borderRadius: 25 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            borderRadius: 50,
            overflow: 'hidden',
          }}
        >
          <BlurView
            intensity={50}
            tint="light"
            style={{
              height: 45,
              width: 45,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Feather name="search" size={24} color="#fff" />
          </BlurView>
        </TouchableOpacity>
      </Animated.View>
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 30,
        }}
        style={{
          flex: 1,
          backgroundColor: '#000',
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Animated.View style={[imageAnimatedStyle]}>
            <Image
              style={{ width: '100%', height: IMAGE_HEIGHT }}
              source={{
                uri: 'https://files.ekmcdn.com/allwallpapers/images/the-witcher-3-movie-poster-61x91.5cm-large-38015-1-p.jpg',
              }}
            />
          </Animated.View>
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.9)']}
            style={{
              position: 'absolute',
              width: '100%',
              height: SHADOWN_HEIGHT,
            }}
          />
          <View style={{ backgroundColor: '#000' }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 15,
                alignItems: 'center',
              }}
            >
              <TouchableOpacity
                style={{
                  overflow: 'hidden',
                  borderRadius: 50,
                }}
              >
                <BlurView
                  tint="light"
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 110,
                    height: 40,
                    gap: 5,
                  }}
                >
                  <Entypo name="controller-play" size={20} color="white" />
                  <Text style={styles.text}>Play</Text>
                </BlurView>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: 'white',
                  width: 110,
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 50,
                }}
              >
                <Text style={styles.text}>Details</Text>
              </TouchableOpacity>
            </View>
            <Animated.View
              entering={FadeInDown.duration(500)
                .delay(200)
                .damping(500)
                .springify()}
            >
              <ContinueToWatch data={tvShows} title="Continue Watch" />
              <MovieTrendingList
                title="Trending Now"
                onSeeAllPress={onTrendingPress}
                data={movies}
              />
              <MovieTrendingList
                title="Series"
                onSeeAllPress={onSeriesPress}
                data={tvShows}
              />
              <MovieSeriesList title="Korean TV Drama" data={kdramaSeries} />
              <MovieTrendingList title="Anime Series" data={animeSeries} />
            </Animated.View>
          </View>
        </View>
      </Animated.ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 16,
  },
});
