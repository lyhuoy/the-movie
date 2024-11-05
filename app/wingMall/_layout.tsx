import React from 'react';
import { Stack } from 'expo-router';

export default function WingMallLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="(tabs)"
        options={{
          animation: 'fade',
        }}
      />
      <Stack.Screen name="wingWallet" />
      <Stack.Screen name="food" />
      <Stack.Screen name="shopping" />
      <Stack.Screen name="grocery" />
      <Stack.Screen
        name="productDetail"
        options={{
          animation: 'fade_from_bottom',
        }}
      />
      <Stack.Screen name="pickup" />
      <Stack.Screen name="myBox" />
      <Stack.Screen name="flashSale" />
      <Stack.Screen name="movie" />
      <Stack.Screen name="foodCategory" />
    </Stack>
  );
}
