import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { textColor } from '@/constants/Colors';
import AllStoreCard from './AllStoreCard';
import { promotionData } from '@/constants/dummy';
import LottieView from 'lottie-react-native';

export default function AllStoreList() {
  return (
    <View
      style={{
        gap: 15,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          flexShrink: 1,
          color: textColor,
          marginHorizontal: 15,
        }}
        numberOfLines={1}
      >
        All Stores
      </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        data={promotionData}
        scrollEventThrottle={16}
        initialNumToRender={3}
        ListFooterComponent={() => (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <LottieView
              source={require('@/assets/lottie/loading.json')}
              autoPlay
              loop
              style={{
                width: 80,
                height: 80,
              }}
            />
          </View>
        )}
        contentContainerStyle={{
          paddingHorizontal: 15,
          gap: 15,
        }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <AllStoreCard item={item} />}
      />
    </View>
  );
}
