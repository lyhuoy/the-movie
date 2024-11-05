import { View, Text } from 'react-native';
import React from 'react';
import ProductCard from './ProductCard';
import { FlashList } from '@shopify/flash-list';
import PressableButton from '../PressableButton';
import { primaryColor, textColor } from '@/constants/Colors';
import FlashSalesCountdown from '../FlashSalesCountdown';
import { Href, useRouter } from 'expo-router';

export interface Product {
  id: number;
  storeName: string;
  name: string;
  price: number;
  discount: string;
  priceAfterDiscount: number;
  image: string;
}

type ProductListProps = {
  title: string;
  productData: Product[];
};

export default function ProductList({ title, productData }: ProductListProps) {
  const router = useRouter();

  const onViewAll = () => {
    router.push('wingMall/flashSale' as Href);
  };

  return (
    <View>
      <View
        style={{
          paddingHorizontal: 15,
          gap: 5,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',

            gap: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: '900',
              flexShrink: 1,
              color: primaryColor,
              fontStyle: 'italic',
            }}
            numberOfLines={1}
          >
            {title}
          </Text>
          <PressableButton
            onPress={onViewAll}
            style={{
              backgroundColor: 'white',
              borderRadius: 50,
              paddingHorizontal: 15,
              paddingVertical: 7,
            }}
          >
            <Text
              style={{
                color: '#013593',
                fontSize: 12,
                fontWeight: 'bold',
              }}
            >
              View all
            </Text>
          </PressableButton>
        </View>
        {title === 'Flash Sales' && <FlashSalesCountdown />}
      </View>
      <FlashList
        horizontal
        data={productData}
        showsHorizontalScrollIndicator={false}
        estimatedItemSize={100}
        scrollEventThrottle={16}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        contentContainerStyle={{
          padding: 15,
        }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard item={item} />}
      />
    </View>
  );
}
