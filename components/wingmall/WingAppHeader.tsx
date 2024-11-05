import { View, Text } from 'react-native';
import React from 'react';
import { secondaryColor, primaryColor } from '@/constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import PressableButton from '../PressableButton';
import Constants from 'expo-constants';
import { Href, useRouter } from 'expo-router';

type WingAppHeaderProps = {
  title: string;
  description: string;
};

export default function WingAppHeader({
  title,
  description,
}: WingAppHeaderProps) {
  const router = useRouter();
  const HEADER_HEIGHT = Constants.statusBarHeight + 105;
  const ITEM_SPACING = 15;

  const onBack = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const onPress = () => {
    router.push('wingMall/foodCategory' as Href);
  };

  return (
    <View
      style={{
        backgroundColor: secondaryColor,
        padding: ITEM_SPACING,
        height: HEADER_HEIGHT,
        justifyContent: 'flex-end',
        gap: ITEM_SPACING,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 20,
          justifyContent: 'space-between',
        }}
      >
        <PressableButton onPress={onBack}>
          <Octicons name="arrow-left" size={25} color={primaryColor} />
        </PressableButton>
        <PressableButton
          style={{
            gap: 8,
            alignItems: 'center',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
            }}
          >
            {/* <MaterialIcons name="my-location" size={20} color={primaryColor} /> */}
            <Text
              style={{
                color: primaryColor,
                fontSize: 14,
                fontWeight: '600',
              }}
            >
              {title}
            </Text>
            {/* <FontAwesome5 name="chevron-down" size={18} color={primaryColor} /> */}
          </View>
          <Text
            style={{
              color: primaryColor,
              fontSize: 12,
            }}
          >
            {description}
          </Text>
        </PressableButton>
        <PressableButton
          style={{
            padding: 10,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.1)',
          }}
        >
          <AntDesign name="heart" size={20} color="white" />
        </PressableButton>
      </View>
      <PressableButton
        onPress={onPress}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
          paddingVertical: 8,
          paddingHorizontal: ITEM_SPACING,
          borderRadius: 50,
          gap: 10,
        }}
      >
        <Feather name="search" size={18} color={primaryColor} />
        <Text
          style={{
            color: 'lightgray',
            fontWeight: 'bold',
          }}
        >
          Search stores or dishes
        </Text>
      </PressableButton>
    </View>
  );
}
