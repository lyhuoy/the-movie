import * as React from 'react';
import { Dimensions, StatusBar, StyleSheet, Text, View } from 'react-native';
import FirstRoute from '../FirstRoute';
import { BlurView } from 'expo-blur';

export default function Booking() {
  const { width, height } = Dimensions.get('screen');
  const HEADER_HEIGHT = height * 0.12;

  return (
    <View
      style={[
        {
          flex: 1,
          backgroundColor: '#F4F1FA',
        },
        StyleSheet.absoluteFillObject,
      ]}
    >
      <StatusBar animated barStyle={'default'} />

      <BlurView
        intensity={80}
        tint="light"
        style={[
          {
            height: HEADER_HEIGHT,
            width: width,
            position: 'absolute',
            zIndex: 99,
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 40,
          }}
        >
          History
        </Text>
      </BlurView>
      <FirstRoute />
    </View>
  );
}
