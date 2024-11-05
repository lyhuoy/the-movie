import { View, Text } from 'react-native';
import React from 'react';
import WingAppHeader from '@/components/wingmall/WingAppHeader';
import { primaryColor, textColor } from '@/constants/Colors';
import FlashSalesCountdown from '@/components/FlashSalesCountdown';
import FlashSaleList from '@/components/wingmall/FlashSaleList';

export default function FlashSale() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <WingAppHeader title="Flash Sale" description="Limited time offer" />
      <View
        style={{
          padding: 15,
          gap: 10,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: '900',
            color: primaryColor,
            fontStyle: 'italic',
          }}
        >
          Flash Sales
        </Text>
        <FlashSalesCountdown />
      </View>
      <FlashSaleList />
    </View>
  );
}
