import React, { useEffect } from 'react';
import { Image } from 'expo-image';
import { Href, useRouter } from 'expo-router';
import Animated, { FadeOutDown } from 'react-native-reanimated';

export default function InitialScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('wingMall/(tabs)' as Href);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Animated.View style={{ flex: 1 }}>
      <Image
        source={require('@/assets/images/wingmall_splash.png')}
        style={{ width: '100%', height: '100%' }}
      />
    </Animated.View>
  );
}
