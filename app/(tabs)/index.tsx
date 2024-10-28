import { Text, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Href, useRouter } from 'expo-router';
import * as Haptics from 'expo-haptics';

export default function HomeScreen() {
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
  ];

  const onNavigate = (path: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
    router.navigate(path as Href);
  };

  return (
    <SafeAreaView>
      <StatusBar animated barStyle={'default'} />

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
              backgroundColor: 'lightblue',
              padding: 10,
              margin: 10,
              borderRadius: 5,
            }}
            onPress={() => onNavigate(item.path)}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
