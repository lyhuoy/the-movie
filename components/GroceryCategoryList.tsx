import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import PressableButton from './PressableButton';

export default function GroceryCategoryList() {
  const textColor = '#404040';

  const categories = [
    {
      title: 'Jewelry',
      backgroundColor: '#ffe9ec',
      imageUri: 'https://pngimg.com/uploads/ring/ring_PNG36.png',
      imageSize: { width: 90, height: 90 },
    },
    {
      title: 'Meats',
      backgroundColor: '#FFEFEF',
      imageUri:
        'https://static.vecteezy.com/system/resources/previews/027/521/085/non_2x/fresh-beef-isolated-on-transparent-background-raw-meat-cut-out-generative-ai-png.png',
      imageSize: { width: 90, height: 90 },
    },
    {
      title: 'Flower Shop',
      backgroundColor: '#D6F6D5',
      imageUri:
        'https://png.pngtree.com/png-vector/20240208/ourmid/pngtree-lily-flowering-tulips-png-image_11718940.png',
      imageSize: { width: 90, height: 90 },
    },
    {
      title: 'Personal Care',
      backgroundColor: '#ffe9ec',
      imageUri:
        'https://www.pngkit.com/png/full/413-4133212_buy-cell-phone-accessories-display-screens-for-lg.png',
      imageSize: { width: 50, height: 50 },
    },
    {
      title: 'Beverages & Alcohol',
      backgroundColor: '#FFEFEF',
      imageUri:
        'https://png.pngtree.com/png-vector/20240430/ourmid/pngtree-bottles-of-alcohol-and-nuts-png-image_12345736.png',
      imageSize: { width: 50, height: 50 },
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {categories.slice(0, 2).map((item, index) => (
          <PressableButton
            key={index}
            style={[
              styles.button,
              { backgroundColor: item.backgroundColor, flex: 1 },
            ]}
          >
            <Text style={[styles.title, { color: textColor }]}>
              {item.title}
            </Text>
            <Image
              source={{ uri: item.imageUri }}
              style={[styles.image, item.imageSize]}
              contentFit="contain"
              transition={500}
            />
          </PressableButton>
        ))}
      </View>
      <View style={styles.row}>
        {categories.slice(2).map((item, index) => (
          <PressableButton
            key={index + 2}
            style={[
              styles.button,
              {
                backgroundColor: item.backgroundColor,
                flex: index === 0 ? 2 : 0.95,
              },
            ]}
          >
            <Text style={[styles.title, { color: textColor }]}>
              {item.title}
            </Text>
            <Image
              source={{ uri: item.imageUri }}
              style={[styles.image, item.imageSize]}
              contentFit="contain"
              transition={500}
            />
          </PressableButton>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'column',
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    height: 95,
    borderRadius: 12,
    justifyContent: 'space-between',
    position: 'relative',
  },
  title: {
    fontWeight: 'bold',
    padding: 10,
    fontSize: 12,
  },
  image: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});
