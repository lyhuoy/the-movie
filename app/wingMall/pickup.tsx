import { View, ScrollView } from 'react-native';
import React from 'react';
import AllStoreList from '@/components/wingmall/AllStoreList';
import WingAppHeader from '@/components/wingmall/WingAppHeader';
import { backgroundColor } from '@/constants/Colors';

export default function PickUp() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: backgroundColor,
      }}
    >
      <WingAppHeader title="Pick Up" description="Self Pick-Up at the store" />
      <ScrollView
        style={{
          paddingTop: 15,
          flex: 1,
        }}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
      >
        <AllStoreList />
      </ScrollView>
    </View>
  );
}
