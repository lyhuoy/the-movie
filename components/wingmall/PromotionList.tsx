import { View, Text, FlatList } from 'react-native';
import React from 'react';
import PressableButton from '../PressableButton';
import { promotionData } from '@/constants/dummy';
import PromotionCard from './PromotionCard';
import { textColor } from '@/constants/Colors';

type PromotionListProps = {
  title: string;
};

export default function PromotionList({ title }: PromotionListProps) {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 15,
          gap: 10,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            flexShrink: 1,
            color: textColor,
          }}
          numberOfLines={1}
        >
          {title}
        </Text>
        <PressableButton
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
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={promotionData}
        scrollEventThrottle={16}
        initialNumToRender={3}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          padding: 15,
          gap: 15,
        }}
        renderItem={({ item }) => {
          return <PromotionCard item={item} />;
        }}
      />
    </View>
  );
}
