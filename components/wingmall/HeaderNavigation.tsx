import { View, Text } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';
import Octicons from '@expo/vector-icons/Octicons';
import { useRouter } from 'expo-router';
import PressableButton from '../PressableButton';

type HeaderNavigationProps = {
  title: string;
};

export default function HeaderNavigation({ title }: HeaderNavigationProps) {
  const router = useRouter();
  const HEADER_HEIGHT = Constants.statusBarHeight + 50;
  const secondaryColor = '#fdcc01';

  const onBack = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  return (
    <View
      style={{
        height: HEADER_HEIGHT,
        backgroundColor: secondaryColor,
        paddingHorizontal: 20,
        paddingTop: Constants.statusBarHeight,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        justifyContent: 'flex-end',
        paddingVertical: 10,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 20,
        }}
      >
        <PressableButton onPress={onBack}>
          <Octicons name="arrow-left" size={30} color={'white'} />
        </PressableButton>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
}
