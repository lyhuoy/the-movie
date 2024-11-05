import { Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Href, useRouter } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';

export default function WelcomeScreen() {
  const router = useRouter();

  const animationList = [
    {
      id: 1,
      title: 'Movies',
      path: 'movies',
    },
    {
      id: 2,
      title: 'Share Element',
      path: 'shareElement',
    },
    {
      id: 3,
      title: 'Movies App',
      path: 'movieApp',
    },
    {
      id: 4,
      title: 'Watch Movie App',
      path: 'watchMovie',
    },
    {
      id: 5,
      title: 'redBus',
      path: 'redBus',
    },
    {
      id: 6,
      title: 'WingMall',
      path: 'wingMall',
    },
    {
      id: 7,
      title: 'Facebook Profile',
      path: 'facebookProfile',
    },
    {
      id: 8,
      title: 'Tracking Order Status',
      path: 'trackingOrderStatus',
    },
    {
      id: 9,
      title: 'Pixel Wallpaper',
      path: 'pixelWallpaper',
    },
  ];

  const onNavigate = (path: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
    router.navigate(path as Href);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ScrollView
        scrollEventThrottle={16}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >
        {animationList.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              shadowColor: 'lightgray',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
            onPress={() => onNavigate(item.path)}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={['white', 'lightblue']}
              style={{
                padding: 10,
                borderRadius: 5,
                margin: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                }}
              >
                {item.title}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
