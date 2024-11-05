import { View, Text } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import PressableButton from '../PressableButton';
import { Href, useRouter } from 'expo-router';

export default function BellIcon() {
  const router = useRouter();
  const primaryColor = '#013593';

  const onPressBell = () => {
    router.push('wingMall/myBox' as Href);
  };

  return (
    <PressableButton
      onPress={onPressBell}
      style={{
        position: 'absolute',
        top: Constants.statusBarHeight + 10,
        right: 10,
        zIndex: 99,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          position: 'absolute',
          top: 0,
          right: -2,
          backgroundColor: 'red',
          width: 16,
          height: 16,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 100,
        }}
      >
        <Text
          style={{
            fontSize: 10,
            color: 'white',
          }}
        >
          3
        </Text>
      </View>
      <MaterialCommunityIcons name="bell" size={20} color={primaryColor} />
    </PressableButton>
  );
}
