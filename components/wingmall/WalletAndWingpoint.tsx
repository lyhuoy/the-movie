import { View, Text } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import { Href, useRouter } from 'expo-router';
import PressableButton from '../PressableButton';

export default function WalletAndWingpoint() {
  const router = useRouter();
  const primaryColor = '#013593';

  const onPress = () => {
    router.push('wingMall/wingWallet' as Href);
  };

  return (
    <PressableButton
      onPress={onPress}
      style={{
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 20,
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <View
          style={{
            gap: 5,
          }}
        >
          <Text
            style={{
              color: primaryColor,
              fontSize: 20,
              fontWeight: '800',
            }}
          >
            $991
          </Text>
          <Text
            style={{
              color: primaryColor,
              fontSize: 14,
              fontWeight: '600',
            }}
          >
            Wallet
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/012/658/519/non_2x/wallet-3d-icon-3d-render-concept-free-png.png',
          }}
          style={{
            width: 55,
            height: 55,
          }}
        />
      </View>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: 'lightgray',
          height: '100%',
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <View
          style={{
            gap: 5,
          }}
        >
          <Text
            style={{
              color: primaryColor,
              fontSize: 20,
              fontWeight: '800',
            }}
          >
            168
          </Text>
          <Text
            style={{
              color: primaryColor,
              fontSize: 14,
              fontWeight: '600',
            }}
          >
            Bitcoin
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://img.pikbest.com/origin/10/42/66/36spIkbEsTXtJ.png!sw800',
          }}
          style={{
            width: 60,
            height: 60,
          }}
        />
      </View>
    </PressableButton>
  );
}
