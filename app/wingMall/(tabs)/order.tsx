import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';
import BackButton from '@/components/wingmall/BackButton';
import { secondaryColor, primaryColor, textColor } from '@/constants/Colors';
import PressableButton from '@/components/PressableButton';
import Fontisto from '@expo/vector-icons/Fontisto';
import { Image } from 'expo-image';

export default function Order() {
  const [selectedTab, setSelectedTab] = React.useState(1);

  const tabData = [
    {
      id: 1,
      title: 'Food',
    },
    {
      id: 2,
      title: 'Shopping',
    },
    {
      id: 3,
      title: 'Express',
    },
    {
      id: 4,
      title: 'Movie',
    },
  ];

  return (
    <View>
      <View
        style={{
          backgroundColor: secondaryColor,
          flexDirection: 'row',
          height: 105,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 15,
        }}
      >
        <View
          style={{
            marginTop: Constants.statusBarHeight,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 15,
          }}
        >
          <BackButton />
          <Text
            style={{
              color: primaryColor,
              fontWeight: 'bold',
              fontSize: 18,
            }}
          >
            My Order
          </Text>
        </View>
        <PressableButton
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginTop: Constants.statusBarHeight,
          }}
        >
          <Fontisto name="history" size={18} color={primaryColor} />
          <Text
            style={{
              color: primaryColor,
              fontWeight: 'bold',
              fontSize: 16,
            }}
          >
            History
          </Text>
        </PressableButton>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 10,
          padding: 15,
        }}
      >
        {tabData.map((tab) => (
          <PressableButton
            key={tab.id}
            style={{
              paddingHorizontal: 20,
              paddingVertical: 7,
              borderRadius: 20,
              backgroundColor:
                tab.id === selectedTab ? primaryColor : '#E5E4E2',
            }}
            onPress={() => setSelectedTab(tab.id)}
          >
            <Text
              style={{
                color: tab.id === selectedTab ? 'white' : 'black',
                fontWeight: 'bold',
                fontSize: 15,
              }}
            >
              {tab.title}
            </Text>
          </PressableButton>
        ))}
      </ScrollView>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 500,
          paddingHorizontal: 15,
          gap: 20,
        }}
      >
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <Image
            source={{
              uri: 'https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG54.png',
            }}
            style={{ width: 200, height: 200 }}
          />

          <Text
            style={{
              color: textColor,
              fontSize: 18,
              fontWeight: 'bold',
            }}
          >
            No Active Orders
          </Text>
          <Text
            style={{
              color: 'gray',
              fontSize: 14,
              textAlign: 'center',
            }}
          >
            You have no active orders. Go to the home page to place an order.
          </Text>
        </View>
        <PressableButton
          style={{
            backgroundColor: primaryColor,
            paddingHorizontal: 40,
            paddingVertical: 10,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            ORDER NOW
          </Text>
        </PressableButton>
      </View>
    </View>
  );
}
