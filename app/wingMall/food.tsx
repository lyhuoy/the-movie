import { ScrollView, View } from 'react-native';
import React from 'react';
import { productData } from '@/constants/dummy';
import ProductList from '@/components/wingmall/ProductList';
import PromotionList from '@/components/wingmall/PromotionList';
import WingAppHeader from '@/components/wingmall/WingAppHeader';
import FoodBanner from '@/components/wingmall/FoodBanner';
import AllStoreList from '@/components/wingmall/AllStoreList';

export default function Food() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <WingAppHeader
        title="Current Location"
        description="Siem Reap, Angkor, Cambodia"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
        }}
      >
        <FoodBanner />
        <ProductList title="Flash Sales" productData={productData} />
        <PromotionList title="Promotions" />
        <PromotionList title="New Stores" />
        <PromotionList title="Energy Refreshment🍉🍊🍌" />
        <AllStoreList />
      </ScrollView>
    </View>
  );
}
