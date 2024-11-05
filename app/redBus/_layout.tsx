import React from 'react';
import { Stack } from 'expo-router';

export default function RedbusLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="TripDetail" />
      <Stack.Screen name="SearchBus" />
    </Stack>
  );
}
