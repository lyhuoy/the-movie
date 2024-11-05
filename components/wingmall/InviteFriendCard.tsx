import { View, Text } from 'react-native';
import React from 'react';
import PressableButton from '../PressableButton';
import { Image } from 'expo-image';
import { primaryColor, subtextColor, textColor } from '@/constants/Colors';

export default function InviteFriendCard() {
  return (
    <View
      style={{
        backgroundColor: '#D6F6D5',
        marginHorizontal: 15,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 20,
        marginBottom: 15,
      }}
    >
      <View
        style={{
          gap: 10,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: textColor,
          }}
        >
          Share the Love and Get Perks!
        </Text>
        <Text
          style={{
            color: subtextColor,
            fontSize: 14,
            width: 230,
            lineHeight: 23,
          }}
        >
          Please invite your friends to WingMall now, they will get $250 and you
          will get $100 after they completed there first order.
        </Text>
        <PressableButton
          style={{
            backgroundColor: primaryColor,
            paddingVertical: 8,
            borderRadius: 50,
            width: 130,
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            Invite Friend
          </Text>
        </PressableButton>
      </View>
      <Image
        source={{
          uri: 'https://static.vecteezy.com/system/resources/previews/008/472/909/non_2x/beautiful-young-asian-woman-with-shopping-bags-file-png.png',
        }}
        style={{
          width: 175,
          height: 175,
          position: 'absolute',
          right: -20,
          bottom: 0,
        }}
        contentFit="contain"
      />
    </View>
  );
}
