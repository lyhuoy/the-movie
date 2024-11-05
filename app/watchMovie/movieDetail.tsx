import {
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';
import { animeSeries } from '@/constants/dummy';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';
import Constants from 'expo-constants';
import { BlurView } from 'expo-blur';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function MovieDetail() {
  const params = useLocalSearchParams();

  const router = useRouter();
  const { width, height } = Dimensions.get('screen');
  const IMAGE_HEIGHT = height / 2;

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMAGE_HEIGHT, 0, IMAGE_HEIGHT],
            [-IMAGE_HEIGHT / 2, 0, IMAGE_HEIGHT * 0.85],
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

  return (
    <>
      <View
        style={{
          position: 'absolute',
          top: Constants.statusBarHeight,
          zIndex: 100,
          paddingHorizontal: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
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
            <Ionicons name="arrow-back-outline" size={24} color="white" />
          </BlurView>
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
            <Feather name="more-vertical" size={24} color="#fff" />
          </BlurView>
        </TouchableOpacity>
      </View>
      <Animated.ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
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
              style={[{ width: '100%', height: IMAGE_HEIGHT }]}
              source={params.poster}
            />
          </Animated.View>
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,9)']}
            style={{
              position: 'absolute',
              width: '100%',
              height: IMAGE_HEIGHT + 30,
            }}
          />
          <View
            style={{
              gap: 15,
              paddingBottom: 50,
              backgroundColor: '#000',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 20,
                gap: 10,
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                  fontWeight: 'bold',
                  flexShrink: 1,
                }}
              >
                {params.title}
              </Text>
              <View
                style={{
                  gap: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Entypo name="plus" size={24} color="#fff" />
                <AntDesign name="clouddownload" size={24} color="#fff" />
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                gap: 15,
                paddingHorizontal: 20,
              }}
            >
              <Text
                style={{
                  color: 'lightgreen',
                  fontSize: 16,
                  fontWeight: 'semibold',
                }}
              >
                95% Match
              </Text>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 16,
                  fontWeight: 'semibold',
                }}
              >
                2023 2h 49m R HD
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
                paddingHorizontal: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: 'red',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 30,
                  height: 30,
                  borderRadius: 50,
                }}
              >
                <AntDesign name="like1" size={18} color="black" />
              </TouchableOpacity>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'semibold',
                }}
              >
                Most Liked
              </Text>
            </View>

            <TouchableOpacity
              style={{
                overflow: 'hidden',
                borderRadius: 50,
                marginHorizontal: 20,
              }}
            >
              <BlurView
                tint="light"
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  paddingVertical: 15,
                  gap: 8,
                  alignItems: 'center',
                }}
              >
                <Entypo name="controller-play" size={20} color="white" />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 16,
                  }}
                >
                  Play
                </Text>
              </BlurView>
            </TouchableOpacity>

            <View
              style={{
                paddingHorizontal: 20,
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 24,
                  fontWeight: 'bold',
                  marginVertical: 10,
                }}
              >
                Prolog
              </Text>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 14,
                }}
              >
                After the devastating events of Avengers: Infinity War (2018),
                the universe is in ruins. With the help of remaining allies, the
                Avengers assemble once more in order to reverse Thanos' actions
                and restore balance to the universe.
              </Text>
            </View>

            <View>
              <Text
                style={{
                  color: 'white',
                  fontSize: 24,
                  fontWeight: 'bold',
                  marginVertical: 10,
                  paddingHorizontal: 20,
                }}
              >
                Top Cast
              </Text>
              <FlatList
                data={animeSeries}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  gap: 10,
                  paddingHorizontal: 20,
                }}
                renderItem={({ item }) => (
                  <View
                    style={{
                      width: 110,
                      alignItems: 'center',
                      gap: 5,
                    }}
                  >
                    <Image
                      style={{
                        width: 110,
                        height: 110,
                        borderRadius: 12,
                      }}
                      source={item.poster}
                    />
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 14,
                      }}
                    >
                      {item.title}
                    </Text>
                  </View>
                )}
              />
            </View>
          </View>
        </View>
      </Animated.ScrollView>
    </>
  );
}
