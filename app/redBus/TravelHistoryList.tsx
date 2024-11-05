import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { DottedDivider } from '@/components/DotDivider';
import { useRouter } from 'expo-router';

export type BusDataType = {
  busName: string;
  busImage: string;
  busType: string;
  from: string;
  to: string;
  departureDate: string;
  departureTime: string;
  price: number;
};

export default function TravelHistoryList({ item }: { item: BusDataType }) {
  const router = useRouter();

  const handlePress = () => {
    router.navigate('/redBus/TripDetail');
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 16,
        justifyContent: 'space-between',
        padding: 20,
      }}
    >
      <View
        style={{
          backgroundColor: '#F4F1FA',
          width: 30,
          height: 30,
          position: 'absolute',
          right: 108,
          borderRadius: 15,
          top: -15,
          zIndex: 1,
        }}
      />
      <View style={{ gap: 10 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <Image
            source={item.busImage}
            style={{ width: 40, height: 40, borderRadius: 20 }}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'semibold',
            }}
          >
            {item.busName}
          </Text>
        </View>
        <View style={{ gap: 5 }}>
          <Text
            style={{
              fontSize: 12,
              color: 'gray',
            }}
          >
            {item.busType}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
            }}
          >
            {item.from} - {item.to}
          </Text>
        </View>
        <View
          style={{
            gap: 5,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: 'gray',
            }}
          >
            Departure Date
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: '#f4978e',
            }}
          >
            {item.departureDate} - {item.departureTime}
          </Text>
        </View>
        <DottedDivider />
        <Text
          style={{
            fontSize: 12,
            color: 'gray',
          }}
        >
          {item.departureDate} - {item.departureTime}
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          zIndex: 100,
          top: 17,
          bottom: 0,
          right: 122.5,
        }}
      >
        <View
          style={[
            {
              width: 1,
              overflow: 'hidden',
            },
          ]}
        >
          <View
            style={[
              {
                width: 1,
                height: '96%',
                borderWidth: 1,
                borderColor: 'lightgray',
                borderStyle: 'dashed',
                borderRadius: 1,
              },
            ]}
          />
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderStyle: 'dashed',
            borderColor: 'red',
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 50,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: 'red',
              fontWeight: 'bold',
            }}
          >
            Departed
          </Text>
        </View>
        <FontAwesome5 name="ship" size={45} color="#F4F1FA" />
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
          }}
        >
          ${item.price}.00
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#F4F1FA',
          width: 30,
          height: 30,
          position: 'absolute',
          right: 108,
          borderRadius: 15,
          bottom: -15,
          zIndex: 1,
        }}
      />
    </TouchableOpacity>
  );
}
