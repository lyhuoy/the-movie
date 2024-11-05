import { View, Text } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';

export default function Scan() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}
    >
      <Image
        source={{
          uri: 'https://i.gifer.com/origin/06/062d8dfe6dcf19983612d97e0eca3409_w200.gif',
        }}
        style={{
          width: 200,
          height: 200,
        }}
        contentFit="contain"
      />
    </View>
  );
}
