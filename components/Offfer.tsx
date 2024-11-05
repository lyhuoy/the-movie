import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Offfer() {
  const ITEM_WIDTH = 350;
  const ITEM_HEIGHT = 160;

  const offers = [
    {
      id: 1,
      title: 'Get 10% off on your first booking',
      description: 'Use code: FIRSTBUS',
    },
    {
      id: 2,
      title: 'Save $5 on bookings over $50',
      description: 'Use code: SAVE5',
    },
    {
      id: 3,
      title: 'Flat 15% off on round trips',
      description: 'Use code: ROUND15',
    },
    {
      id: 4,
      title: '20% off on weekend travel',
      description: 'Use code: WEEKEND20',
    },
    {
      id: 5,
      title: 'Exclusive 25% discount for new users',
      description: 'Use code: NEWUSER25',
    },
    {
      id: 6,
      title: 'Get $10 off on bookings over $100',
      description: 'Use code: BIGSAVE10',
    },
    {
      id: 7,
      title: 'Enjoy 5% cashback on all bookings',
      description: 'Use code: CASHBACK5',
    },
    {
      id: 8,
      title: 'Get 50% off on your second ticket',
      description: 'Use code: HALFPRICE',
    },
    {
      id: 9,
      title: 'Save $15 on group bookings of 4 or more',
      description: 'Use code: GROUP15',
    },
    {
      id: 10,
      title: '15% off on any overnight trip',
      description: 'Use code: NIGHT15',
    },
  ];

  return (
    <View
      style={{
        gap: 15,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
          Offer
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: 'blue',
              fontSize: 14,
            }}
          >
            View all
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={offers}
        contentContainerStyle={{
          paddingHorizontal: 15,
          gap: 15,
        }}
        snapToInterval={ITEM_WIDTH + 15}
        decelerationRate="fast"
        bounces={false}
        scrollEventThrottle={16}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              padding: 15,
              flexDirection: 'row',
              borderRadius: 15,
              width: ITEM_WIDTH,
              height: ITEM_HEIGHT,
              alignItems: 'center',
            }}
          >
            <LottieView
              source={require('@/assets/images/offers.json')}
              autoPlay
              loop
              style={{
                width: 100,
                height: 100,
              }}
            />
            <View
              style={{
                flexShrink: 1,
                gap: 10,
              }}
            >
              <View
                style={{
                  gap: 10,
                  flexShrink: 1,
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}
                  numberOfLines={2}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    color: 'gray',
                  }}
                >
                  {item.description}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: '#f4978e',
                  justifyContent: 'center',
                  padding: 10,
                  alignItems: 'center',
                  borderRadius: 10,
                }}
              >
                <AntDesign name="arrowright" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
