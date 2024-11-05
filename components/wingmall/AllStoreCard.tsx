import { View, Text } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import { primaryColor, secondaryColor, textColor } from '@/constants/Colors';
import Fontisto from '@expo/vector-icons/Fontisto';
import AntDesign from '@expo/vector-icons/AntDesign';
import PressableButton from '../PressableButton';
import { BlurView } from 'expo-blur';

export type Promotion = {
  id: number;
  storeName: string;
  name: string;
  price: number;
  priceAfterDiscount: number;
  type: string[];
  image: string;
  discount: string;
  deliveryCharge: string;
  duration: string;
  rating: number;
};

type PromotionCardProps = {
  item: Promotion;
};

export default function AllStoreCard({ item }: PromotionCardProps) {
  const typeString = item.type.join(' • ');

  return (
    <PressableButton
      style={{
        backgroundColor: 'white',
        borderRadius: 15,
      }}
    >
      <PressableButton
        style={{
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: 10,
          right: 10,
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        <BlurView
          intensity={50}
          style={{
            padding: 10,
          }}
        >
          <AntDesign name="hearto" size={20} color="white" />
        </BlurView>
      </PressableButton>
      <Image
        source={{ uri: item.image }}
        style={{
          width: '100%',
          height: 170,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
        transition={500}
      />
      <View
        style={{
          padding: 10,
          gap: 10,
        }}
      >
        <View
          style={{
            gap: 5,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
            }}
          >
            <Image
              source={{
                uri: 'https://pngimg.com/d/coin_PNG36871.png',
              }}
              style={{ width: 18, height: 18 }}
              transition={500}
            />
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: textColor,
              }}
            >
              {item.storeName}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 12,
              color: 'lightgray',
            }}
            numberOfLines={1}
          >
            {typeString}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
              }}
            >
              <Fontisto name="motorcycle" size={16} color={primaryColor} />
              <Text
                style={{
                  fontSize: 12,
                  color: 'gray',
                }}
              >
                {item.deliveryCharge}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
              }}
            >
              <Fontisto name="clock" size={14} color={primaryColor} />
              <Text
                style={{
                  fontSize: 12,
                  color: 'gray',
                }}
              >
                - {item.duration}
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
            }}
          >
            <AntDesign name="star" size={16} color={secondaryColor} />
            <Text
              style={{
                fontSize: 12,
                color: primaryColor,
              }}
            >
              {item.rating}
            </Text>
          </View>
        </View>
      </View>
    </PressableButton>
  );
}
