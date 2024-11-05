import { View, Text } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import PressableButton from '../PressableButton';
import { Href, useRouter } from 'expo-router';

export default function FoodAndShopping() {
  const router = useRouter();

  const onFoodPress = () => {
    router.push('/wingMall/food' as Href);
  };

  const onShoppingPress = () => {
    router.push('/wingMall/shopping' as Href);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'space-between',
      }}
    >
      <PressableButton
        onPress={onFoodPress}
        style={{
          backgroundColor: 'white',
          borderRadius: 20,
          padding: 20,
          flex: 1,
          gap: 15,
          shadowColor: 'lightgray',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <View
          style={{
            gap: 5,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
            }}
          >
            Food
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: 'gray',
            }}
          >
            Order what you love
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/025/028/422/non_2x/a-big-breakfast-food-png.png',
          }}
          style={{
            width: 90,
            height: 90,
            borderRadius: 20,
            alignSelf: 'flex-end',
          }}
        />
      </PressableButton>
      <PressableButton
        onPress={onShoppingPress}
        style={{
          backgroundColor: 'white',
          borderRadius: 20,
          padding: 20,
          flex: 1,
          gap: 15,
        }}
      >
        <View
          style={{
            gap: 5,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
            }}
          >
            Shopping
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: 'gray',
            }}
          >
            Find your own style
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://static.vecteezy.com/system/resources/thumbnails/027/293/706/small/character-cartoon-hand-holding-shopping-paper-bags-isolated-3d-illustration-render-png.png',
          }}
          style={{
            width: 90,
            height: 90,
            borderRadius: 20,
            alignSelf: 'flex-end',
          }}
        />
      </PressableButton>
    </View>
  );
}
