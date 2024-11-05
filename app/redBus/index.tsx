import React, { useEffect } from 'react';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';

export default function InitialScreen() {
  const router = useRouter();
  const [isLoadingSplash, setIsLoadingSplash] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingSplash(false);
      router.replace('/redBus/(tabs)');
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoadingSplash && (
        <Image
          //   source={require('@/assets/images/redbus_splash.png')}
          source={{
            uri: 'https://i.pinimg.com/originals/0b/79/27/0b7927979308fa35d1bbd315767e9078.png',
          }}
          style={{ width: '90%', height: '100%', alignSelf: 'center' }}
          contentFit="contain"
        />
      )}
    </>
  );
}
