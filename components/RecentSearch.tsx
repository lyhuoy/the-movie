import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function RecentSearch() {
  const data = [
    {
      id: 1,
      departure: 'Siem Reap',
      destination: 'Phnom Penh',
      date: 'Mon, 20 Sep 2024',
    },
    {
      id: 2,
      departure: 'Battambang',
      destination: 'Phnom Penh',
      date: 'Wed, 22 Sep 2024',
    },
    {
      id: 3,
      departure: 'Kampot',
      destination: 'Sihanoukville',
      date: 'Fri, 24 Sep 2024',
    },
    {
      id: 4,
      departure: 'Phnom Penh',
      destination: 'Siem Reap',
      date: 'Sun, 26 Sep 2024',
    },
    {
      id: 5,
      departure: 'Sihanoukville',
      destination: 'Kampot',
      date: 'Tue, 28 Sep 2024',
    },
    {
      id: 6,
      departure: 'Phnom Penh',
      destination: 'Battambang',
      date: 'Thu, 30 Sep 2024',
    },
  ];

  return (
    <View
      style={{
        gap: 15,
      }}
    >
      <Text
        style={{
          paddingHorizontal: 15,
          fontSize: 20,
          fontWeight: 'bold',
        }}
      >
        Recent Search
      </Text>

      <FlatList
        scrollEventThrottle={16}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 10,
          paddingHorizontal: 15,
        }}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              borderRadius: 15,
              padding: 15,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 15,
            }}
          >
            <Image
              source={{
                uri: 'https://png.pngtree.com/png-clipart/20230914/original/pngtree-pirate-ship-clipart-cartoon-pirate-ship-floating-on-water-vector-png-image_12163121.png',
              }}
              style={{ width: 50, height: 50 }}
              contentFit="contain"
            />
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}
                >
                  {item.departure}
                </Text>
                <AntDesign name="arrowright" size={24} color="gray" />
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}
                >
                  {item.destination}
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 16,
                  color: 'gray',
                  fontWeight: 'semibold',
                }}
              >
                Mon 28 Oct
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
