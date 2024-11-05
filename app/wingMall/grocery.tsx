import { ScrollView, View } from 'react-native';
import React from 'react';
import PromotionList from '@/components/wingmall/PromotionList';
import WingAppHeader from '@/components/wingmall/WingAppHeader';
import FoodBanner from '@/components/wingmall/FoodBanner';
import GroceryCategoryList from '@/components/GroceryCategoryList';
import AllStoreList from '@/components/wingmall/AllStoreList';
import InviteFriendCard from '@/components/wingmall/InviteFriendCard';
import { backgroundColor } from '@/constants/Colors';

export default function Grocery() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: backgroundColor,
      }}
    >
      <WingAppHeader title="Current Location" description="Siem Reap Angkor" />
      <ScrollView
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 30,
        }}
      >
        <FoodBanner />
        <GroceryCategoryList />
        <PromotionList title="New Store" />
        <InviteFriendCard />
        <AllStoreList />
      </ScrollView>
    </View>
  );
}
