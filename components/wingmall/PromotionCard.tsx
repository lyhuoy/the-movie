import React, { memo } from 'react';
import { View, Text } from 'react-native';
import PressableButton from '../PressableButton';
import { Image } from 'expo-image';
import Fontisto from '@expo/vector-icons/Fontisto';
import { primaryColor, secondaryColor } from '@/constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';

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

function PromotionCard({ item }: PromotionCardProps) {
  const { type, image, discount, deliveryCharge, duration, rating } = item;
  const typeString = type.join(' • ');

  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: 'wingMall/productDetail' as any,
      params: item,
    });
  };

  return (
    <PressableButton
      onPress={handlePress}
      style={{
        backgroundColor: 'white',
        width: 230,
        borderRadius: 15,
      }}
    >
      <View
        style={{
          backgroundColor: '#e23c3c',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 5,
          position: 'absolute',
          zIndex: 100,
          borderRadius: 6,
          top: 10,
          left: 10,
          paddingHorizontal: 10,
          gap: 5,
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 12,
            fontWeight: 'bold',
          }}
        >
          {discount}
        </Text>
        <MaterialCommunityIcons
          name="brightness-percent"
          size={14}
          color="white"
        />
      </View>
      <Image
        source={{ uri: image }}
        style={{
          width: 230,
          height: 120,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
        transition={500}
      />
      <View
        style={{
          padding: 10,
          gap: 8,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            gap: 5,
            alignItems: 'center',
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
              color: 'gray',
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
                {deliveryCharge}
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
                - {duration}
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
              {rating}
            </Text>
          </View>
        </View>
      </View>
    </PressableButton>
  );
}

export default memo(PromotionCard);
