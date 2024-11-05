import { View } from 'react-native';
import React from 'react';
import WingAppHeader from '@/components/wingmall/WingAppHeader';
import PromotionList from '@/components/wingmall/PromotionList';

export default function Shopping() {
  return (
    <View
      style={{
        gap: 15,
      }}
    >
      <WingAppHeader />
      <PromotionList title="Earn Wingpoing Here" />
    </View>
  );
}
