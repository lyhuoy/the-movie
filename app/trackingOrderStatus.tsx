import { View, Text, Pressable, FlatList } from 'react-native';
import React from 'react';
import Foundation from '@expo/vector-icons/Foundation';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Fontisto from '@expo/vector-icons/Fontisto';
import Ionicons from '@expo/vector-icons/Ionicons';
import PressableButton from '@/components/PressableButton';
import { primaryColor } from '@/constants/Colors';
import Animated from 'react-native-reanimated';

export default function TrackingOrderStatus() {
  const [orderStatus, setOrderStatus] = React.useState('Order Placed');
  const orderProcess = [
    {
      id: 1,
      title: 'Order Placed',
      description: 'Your order has been placed successfully',
      status: 'completed',
      icon: <Foundation name="dollar" size={24} color="white" />,
    },
    {
      id: 2,
      title: 'Order Processed',
      description: 'Your order has been processed',
      status: 'processing',
      icon: <FontAwesome5 name="store" size={24} color="white" />,
    },
    {
      id: 3,
      title: 'Order Shipped',
      description: 'Your order has been shipped',
      status: 'processing',
      icon: <Fontisto name="motorcycle" size={24} color="white" />,
    },
    {
      id: 4,
      title: 'Order Delivered',
      description: 'Your order has been delivered',
      status: 'processing',
      icon: <Ionicons name="bag-check-outline" size={24} color="white" />,
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 60,
      }}
    >
      {/* <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={orderProcess}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          gap: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        ItemSeparatorComponent={() => (
          <View
            style={{
              width: 20,
              height: 5,
              backgroundColor: primaryColor,
              
            }}
          />
        )}
        renderItem={({ item }) => (
          <View>
            <View
              style={{
                backgroundColor:
                  item.status === 'completed' ? primaryColor : 'gray',
                width: 40,
                height: 40,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {item.icon}
            </View>
          </View>
        )}
      /> */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          marginVertical: 20,
        }}
      >
        {orderProcess.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => setOrderStatus(item.title)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                backgroundColor:
                  item.status === 'completed' ? primaryColor : 'gray',
                width: 40,
                height: 40,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 2,
                borderColor:
                  item.status === 'completed' ? 'white' : primaryColor,
              }}
            >
              {item.icon}
            </View>
            {/* not display last index */}
            {index !== orderProcess.length - 1 && (
              <Animated.View
                style={{
                  width: 64,
                  height: 4,
                  backgroundColor: primaryColor,
                }}
              />
            )}
          </Pressable>
        ))}
      </View>
      <PressableButton
        style={{
          backgroundColor: primaryColor,
          padding: 14,
          borderRadius: 50,
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 18,
          }}
        >
          {orderStatus}
        </Text>
      </PressableButton>
    </View>
  );
}
