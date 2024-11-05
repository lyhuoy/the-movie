import { View, Text } from 'react-native';
import React from 'react';
import { Product } from './ProductList';
import { Image } from 'expo-image';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import PressableButton from '../PressableButton';
import { textColor } from '@/constants/Colors';
import { useRouter } from 'expo-router';

type ProductCartProps = {
  item: Product;
};

const ProductCard = ({ item }: ProductCartProps) => {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: 'wingMall/productDetail' as any,
      params: item ,
    });
  };

  return (
    <PressableButton
      onPress={handlePress}
      style={{
        backgroundColor: 'white',
        width: 140,
        borderRadius: 15,
      }}
    >
      <View
        style={{
          backgroundColor: '#e23c3c',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 5,
          position: 'absolute',
          zIndex: 100,
          borderRadius: 6,
          top: 10,
          left: 10,
          paddingHorizontal: 10,
          gap: 5,
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 12,
            fontWeight: 'bold',
          }}
        >
          {item.discount}
        </Text>
        <MaterialCommunityIcons
          name="brightness-percent"
          size={16}
          color="white"
        />
      </View>
      <Image
        source={{ uri: item.image }}
        style={{
          width: 140,
          height: 90,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
        transition={500}
      />
      <View
        style={{
          padding: 10,
          gap: 4,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            color: 'gray',
            fontWeight: 'bold',
          }}
          numberOfLines={1}
        >
          {item.storeName}
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontWeight: 'bold',
            color: textColor,
          }}
          numberOfLines={1}
        >
          {item.name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: '600',
              color: 'red',
            }}
          >
            ${item.price}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '600',
              color: 'gray',
              textDecorationLine: 'line-through',
            }}
          >
            {item.priceAfterDiscount}
          </Text>
        </View>
      </View>
    </PressableButton>
  );
};

export default React.memo(ProductCard);
