import { FlatList } from 'react-native';
import React from 'react';
import { productData } from '@/constants/dummy';
import FlashSaleCard from './FlashSaleCard';

export default function FlashSaleList() {
  return (
    <FlatList
      data={productData}
      style={{
        flex: 1,
      }}
      contentContainerStyle={{
        paddingHorizontal: 15,
        gap: 10,
        paddingBottom: 30,
      }}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <FlashSaleCard item={item} />}
    />
  );
}
