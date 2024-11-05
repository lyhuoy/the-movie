import { View, Text } from 'react-native';
import React from 'react';
import PressableButton from '../PressableButton';
import { primaryColor } from '@/constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';

export default function BackButton() {
  const router = useRouter();

  const handlePress = () => {
    if (!router.canGoBack()) return;
    router.back();
  };

  return (
    <PressableButton onPress={handlePress}>
      <AntDesign name="arrowleft" size={24} color={primaryColor} />
    </PressableButton>
  );
}
