import { View, Text } from 'react-native';
import React from 'react';
import { Product } from './ProductList';
import PressableButton from '../PressableButton';
import { primaryColor, subtextColor } from '@/constants/Colors';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';

type FlashSaleCardProps = {
  item: Product;
};

export default function FlashSaleCard({ item }: FlashSaleCardProps) {
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
        borderRadius: 15,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <View
        style={{
          gap: 5,
        }}
      >
        <Text
          style={{
            color: '#71797E',
            fontSize: 14,
            fontWeight: 'bold',
          }}
        >
          {item.storeName}
        </Text>
        <Text style={{ color: '#2e4053 ', fontSize: 14, fontWeight: 'bold' }}>
          {item.name}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: '#36454F',
            fontWeight: '600',
          }}
        >
          {item.discount} discount
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 5,
          }}
        >
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/5165/5165633.png',
            }}
            style={{ width: 15, height: 15 }}
            transition={500}
          />
          <Text
            style={{
              color: primaryColor,
              fontWeight: 'bold',
            }}
          >
            {item.price}
          </Text>
          <Text
            style={{
              color: subtextColor,
              textDecorationLine: 'line-through',
              fontSize: 12,
            }}
          >
            {item.priceAfterDiscount}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          gap: 10,
        }}
      >
        <Text
          style={{
            color: primaryColor,
            fontSize: 12,
          }}
        >
          No stock limit
        </Text>
        <Image
          source={{
            uri: item.image,
          }}
          style={{ width: 90, height: 90, borderRadius: 15 }}
          transition={500}
        />
      </View>
    </PressableButton>
  );
}
