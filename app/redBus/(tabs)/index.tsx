import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Constants from 'expo-constants';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Fontisto from '@expo/vector-icons/Fontisto';
import Feather from '@expo/vector-icons/Feather';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';
import { BlurView } from 'expo-blur';
import RecentSearch from '@/components/RecentSearch';
import Offfer from '@/components/Offfer';
import { Image } from 'expo-image';
import { Href, useRouter } from 'expo-router';

export default function HomeRedBus() {
  const router = useRouter();
  const { width } = Dimensions.get('screen');
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const HEADER_HEIGHT = Constants.statusBarHeight;

  const reverseHeaderOpacity = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollOffset.value,
        [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
        [1, 1, 0],
        Extrapolation.CLAMP
      ),
    };
  });

  const onSearchBus = () => {
    router.navigate('/redBus/SearchBus' as Href);
  };

  return (
    <Animated.View
      style={[
        {
          flex: 1,
          backgroundColor: '#F4F1FA',
        },
        StyleSheet.absoluteFillObject,
      ]}
    >
      <StatusBar animated barStyle={'default'} />
      <Animated.View
        style={[
          {
            backgroundColor: 'white',
            height: HEADER_HEIGHT,
            width: width,
            position: 'absolute',
            zIndex: 100,
          },
          reverseHeaderOpacity,
        ]}
      />
      <BlurView
        intensity={80}
        tint="light"
        style={[
          {
            height: HEADER_HEIGHT,
            width: width,
            position: 'absolute',
            zIndex: 99,
          },
        ]}
      />

      <Animated.ScrollView
        ref={scrollRef}
        style={{ flex: 1, backgroundColor: '#F4F1FA' }}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <View
          style={{
            paddingTop: HEADER_HEIGHT,
            gap: 15,
          }}
        >
          <View
            style={{
              padding: 15,
              backgroundColor: 'white',
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              gap: 15,
            }}
          >
            {/* header */}
            <View
              style={{
                gap: 15,
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <View style={{ flexShrink: 1 }}>
                <Text
                  style={{
                    fontSize: 28,
                    fontWeight: 'bold',
                    color: 'black',
                  }}
                >
                  Ship Tickets
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'gray',
                  }}
                >
                  World #1 ship ticket booking platform
                </Text>
              </View>
              <Image
                source={{
                  uri: 'https://i.pinimg.com/originals/0b/79/27/0b7927979308fa35d1bbd315767e9078.png',
                }}
                style={{
                  width: 160,
                  height: 160,
                }}
              />
            </View>

            <View
              style={{
                paddingVertical: 15,
                borderWidth: 1,
                borderColor: 'lightgray',
                borderRadius: 10,
                gap: 15,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                  paddingHorizontal: 15,
                }}
              >
                <FontAwesome5 name="bus-alt" size={20} color="black" />
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: 'gray',
                    }}
                  >
                    From
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      color: 'black',
                      fontWeight: 'bold',
                    }}
                  >
                    Siem Reap
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: 'lightgray',
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                  paddingHorizontal: 15,
                }}
              >
                <FontAwesome5 name="bus-alt" size={20} color="black" />
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: 'gray',
                    }}
                  >
                    From
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      color: 'black',
                      fontWeight: 'bold',
                    }}
                  >
                    Siem Reap
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: 'lightgray',
                }}
              />

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 15,
                  justifyContent: 'space-between',
                }}
              >
                <View
                  style={{
                    gap: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Fontisto name="date" size={20} color="black" />
                  <View>
                    <Text
                      style={{
                        fontSize: 14,
                        color: 'gray',
                      }}
                    >
                      Date of Journey
                    </Text>
                    <Text
                      style={{
                        fontSize: 18,
                        color: 'black',
                        fontWeight: 'bold',
                      }}
                    >
                      Mon 28 Oct
                    </Text>
                  </View>
                </View>
                <View style={{ gap: 10, flexDirection: 'row' }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#f4978e',
                      paddingVertical: 6,
                      paddingHorizontal: 13,
                      borderRadius: 5,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        color: 'white',
                        fontWeight: 'bold',
                      }}
                    >
                      Today
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#f4978e',
                      paddingVertical: 6,
                      paddingHorizontal: 13,
                      borderRadius: 5,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        color: 'white',
                        fontWeight: 'bold',
                      }}
                    >
                      Tomorrow
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <TouchableOpacity
              onPress={onSearchBus}
              style={{
                backgroundColor: '#c93333',
                paddingVertical: 15,
                borderRadius: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
              }}
            >
              <Feather name="search" size={22} color="white" />
              <Text
                style={{
                  fontSize: 18,
                  color: 'white',
                  fontWeight: '500',
                }}
              >
                Search Buses
              </Text>
            </TouchableOpacity>
          </View>
          <RecentSearch />
          <Offfer />
        </View>
      </Animated.ScrollView>
    </Animated.View>
  );
}
