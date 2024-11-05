import { View, Text, Dimensions, StatusBar } from 'react-native';
import React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image } from 'expo-image';
import PressableButton from '@/components/PressableButton';
import { BlurView } from 'expo-blur';
import Ionicons from '@expo/vector-icons/Ionicons';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';
import {
  backgroundColor,
  primaryColor,
  subtextColor,
  textColor,
} from '@/constants/Colors';
import Entypo from '@expo/vector-icons/Entypo';
import Radio from '@/components/RadioButton';
import { SURGAR_LEVEL } from '@/constants/dummy';

const { width } = Dimensions.get('screen');
const _imageHeight = width * 0.8;
export default function ProductDetail() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [selectedSugarLevel, setSelectedSugarLevel] = React.useState(3);

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const discountPrice = (Number(params.priceAfterDiscount) * 10).toFixed(0);

  const onBackPress = () => {
    router.back();
  };

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-_imageHeight, 0, _imageHeight],
            [-_imageHeight / 2, 0, _imageHeight]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-_imageHeight, 0, _imageHeight],
            [2, 1, 1]
          ),
        },
      ],
      opacity: interpolate(
        scrollOffset.value,
        [-_imageHeight, 0, _imageHeight],
        [1, 1, 0]
      ),
    };
  });

  return (
    <>
      <StatusBar barStyle={'default'} />
      <PressableButton
        onPress={onBackPress}
        style={{
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: 50,
          right: 20,
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        <BlurView
          intensity={50}
          style={{
            padding: 8,
          }}
        >
          <Ionicons name="close" size={20} color="white" />
        </BlurView>
      </PressableButton>

      <Animated.ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Animated.View style={[imageAnimatedStyle]}>
            <Image
              style={[{ width: '100%', height: _imageHeight }]}
              source={params.image}
            />
          </Animated.View>

          <View
            style={{
              paddingBottom: 10,
              backgroundColor: 'white',
            }}
          >
            <View
              style={{
                backgroundColor: 'white',
                padding: 15,
                gap: 10,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: primaryColor,
                  }}
                >
                  {params.storeName}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 5,
                    alignItems: 'center',
                  }}
                >
                  <Image
                    source={{
                      uri: 'https://cdn-icons-png.flaticon.com/512/5165/5165633.png',
                    }}
                    style={{ width: 17, height: 17 }}
                    transition={500}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'bold',
                      color: primaryColor,
                    }}
                  >
                    {params.price}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: subtextColor,
                      textDecorationLine: 'line-through',
                    }}
                  >
                    ${params.priceAfterDiscount}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: textColor,
                    fontWeight: '500',
                  }}
                >
                  {params.name}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 5,
                    alignItems: 'center',
                  }}
                >
                  <Image
                    source={{
                      uri: 'https://cdn-icons-png.flaticon.com/512/3612/3612015.png',
                    }}
                    style={{ width: 17, height: 17 }}
                    transition={500}
                    contentFit="contain"
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'bold',
                      color: 'red',
                    }}
                  >
                    110
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: subtextColor,
                      textDecorationLine: 'line-through',
                    }}
                  >
                    {discountPrice}
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <View
                style={{
                  backgroundColor: backgroundColor,
                  paddingHorizontal: 15,
                  paddingVertical: 8,
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'bold',
                      color: textColor,
                    }}
                  >
                    Sweet Level.
                  </Text>
                  <Text
                    style={{
                      color: '#EE4B2B',
                    }}
                  >
                    *
                  </Text>
                </View>
              </View>
              <View
                style={{
                  gap: 10,
                  padding: 15,
                }}
              >
                {SURGAR_LEVEL.map((item, index) => (
                  <PressableButton
                    style={{
                      flexDirection: 'row',
                      gap: 10,
                      alignItems: 'center',
                    }}
                    key={index}
                    onPress={() => setSelectedSugarLevel(item.id)}
                  >
                    <Radio
                      key={index}
                      activeRadio={selectedSugarLevel === item.id}
                    />

                    <Text
                      style={{
                        color: textColor,
                      }}
                    >
                      {item.label}
                    </Text>
                  </PressableButton>
                ))}
              </View>
              <View
                style={{
                  backgroundColor: backgroundColor,
                  paddingHorizontal: 15,
                  paddingVertical: 8,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: textColor,
                  }}
                >
                  Add On
                </Text>
              </View>
              <View
                style={{
                  gap: 10,
                  padding: 15,
                }}
              >
                {SURGAR_LEVEL.map((item, index) => (
                  <PressableButton
                    style={{
                      flexDirection: 'row',
                      gap: 10,
                      alignItems: 'center',
                    }}
                    key={index}
                    onPress={() => setSelectedSugarLevel(item.id)}
                  >
                    <Radio
                      key={index}
                      activeRadio={selectedSugarLevel === item.id}
                    />

                    <Text
                      style={{
                        color: textColor,
                      }}
                    >
                      {item.label}
                    </Text>
                  </PressableButton>
                ))}
              </View>

              <View
                style={{
                  padding: 15,
                  gap: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: textColor,
                  }}
                >
                  Special Note
                </Text>
                <View
                  style={{
                    backgroundColor: backgroundColor,
                    height: 100,
                    borderRadius: 12,
                    padding: 10,
                  }}
                >
                  <Text
                    style={{
                      color: 'lightgrey',
                      fontSize: 14,
                      fontWeight: 'bold',
                    }}
                  >
                    Add your special note here...
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Animated.ScrollView>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          paddingVertical: 25,
          paddingHorizontal: 20,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            gap: 20,
            alignItems: 'center',
          }}
        >
          <PressableButton
            style={{
              backgroundColor: backgroundColor,
              width: 30,
              height: 30,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Entypo name="minus" size={20} color={textColor} />
          </PressableButton>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: textColor,
            }}
          >
            168
          </Text>
          <PressableButton
            style={{
              backgroundColor: backgroundColor,
              width: 30,
              height: 30,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Entypo name="plus" size={20} color={textColor} />
          </PressableButton>
        </View>
        <PressableButton
          style={{
            backgroundColor: primaryColor,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            flex: 1,
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: 'bold',
            }}
          >
            ADD
          </Text>
        </PressableButton>
      </View>
    </>
  );
}
