import { View, Text } from 'react-native';
import React from 'react';
import WingAppHeader from '@/components/wingmall/WingAppHeader';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';
import { textColor } from '@/constants/Colors';

export default function FoodCategory() {
  const foodCategory = [
    {
      id: 1,
      name: 'Khmer',
      image:
        'https://www.pngplay.com/wp-content/uploads/9/Meal-Transparent-Images.png',
    },
    {
      id: 2,
      name: 'Fast Food',
      image:
        'https://png.pngtree.com/png-clipart/20231018/original/pngtree-fast-food-cliparts-png-image_13354284.png',
    },
    {
      id: 3,
      name: 'Drinks',
      image:
        'https://png.pngtree.com/png-vector/20240430/ourmid/pngtree-bottles-of-alcohol-and-nuts-png-image_12345736.png',
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}
    >
      <WingAppHeader
        title="Food Category"
        description="Select your favorite food category"
      />
      <LinearGradient
        colors={['white', 'orange']}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        {foodCategory.map((category) => (
          <View
            key={category.id}
            style={{
              justifyContent: 'space-between',
              padding: 15,
              height: 230,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: textColor,
              }}
            >
              {category.name}
            </Text>
            <Image
              source={{ uri: category.image }}
              style={{
                width: 200,
                height: 200,
                position: 'absolute',
                right: 20,
                top: 20,
              }}
              transition={500}
              contentFit="contain"
            />
          </View>
        ))}
      </LinearGradient>
    </View>
  );
}
