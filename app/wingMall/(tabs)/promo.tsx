import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import ProductList from '@/components/wingmall/ProductList';
import { productData } from '@/constants/dummy';
import PromotionList from '@/components/wingmall/PromotionList';
import { primaryColor, secondaryColor, subtextColor } from '@/constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import Constants from 'expo-constants';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import BackButton from '@/components/wingmall/BackButton';

export default function Promo() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: secondaryColor,
          flexDirection: 'row',
          height: 105,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <View
          style={{
            marginTop: Constants.statusBarHeight,
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
            gap: 15,
            paddingHorizontal: 15,
          }}
        >
          <BackButton />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: 25,
              paddingHorizontal: 15,
              paddingVertical: 8,
              gap: 10,
              flex: 1,
            }}
          >
            <AntDesign name="search1" size={18} color={primaryColor} />
            <Text
              style={{
                color: subtextColor,
                fontSize: 14,
              }}
            >
              Discount Store | Promo code
            </Text>
          </View>
          <FontAwesome5 name="align-center" size={24} color={primaryColor} />
        </View>
      </View>
      <ScrollView
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          paddingBottom: 30,
          paddingTop: 15,
        }}
      >
        <ProductList title="Flash Sales" productData={productData} />
        <PromotionList title="Lunch" />
        <PromotionList title="Brunch" />
        <PromotionList title="Drinks" />
        <PromotionList title="Breakfast" />
        <PromotionList title="Dinner" />
      </ScrollView>
    </View>
  );
}
