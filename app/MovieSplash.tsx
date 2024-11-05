import { Dimensions } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';

export default function MovieSplash() {
  const { width, height } = Dimensions.get('screen');
  const router = useRouter();

  React.useEffect(() => {
    setTimeout(() => {
      router.replace('/watchMovie');
    }, 3000);
  }, []);

  return (
    <Image
      source={require('@/assets/images/avenger.gif')}
      style={{
        width,
        height,
      }}
      contentFit="cover"
    />
  );
}
