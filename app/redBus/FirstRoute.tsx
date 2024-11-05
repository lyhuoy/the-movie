import { View } from 'react-native';
import React from 'react';
import { FlashList } from '@shopify/flash-list';
import { travelHistory } from '@/constants/dummy';
import TravelHistoryList from './TravelHistoryList';

export default function FirstRoute() {
  return (
    <FlashList
      scrollEventThrottle={16}
      ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
      estimatedItemSize={200}
      contentContainerStyle={{
        paddingTop: 120,
        paddingHorizontal: 20,
        paddingBottom: 100,
      }}
      data={travelHistory}
      keyExtractor={(item) => item.busName}
      renderItem={({ item }) => <TravelHistoryList item={item} />}
    />
  );
}
