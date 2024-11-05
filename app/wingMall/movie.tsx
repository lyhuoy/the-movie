import { View, Text } from 'react-native';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import PressableButton from '@/components/PressableButton';
import { textColor } from '@/constants/Colors';

export default function Movie() {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'white',
          height: 100,
          paddingTop: 60,
          padding: 15,
          alignItems: 'center',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <PressableButton
            style={{
              backgroundColor: '#DCDCDC',
              width: 35,
              height: 35,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <MaterialIcons
              name="arrow-back-ios-new"
              size={18}
              color="#808080"
            />
          </PressableButton>
          <Text
            style={{
              fontSize: 20,
              color: textColor,
              fontWeight: 'bold',
            }}
          >
            Movie
          </Text>
        </View>

        <PressableButton
          style={{
            backgroundColor: '#DCDCDC',
            width: 35,
            height: 35,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Feather name="search" size={18} color="#808080" />
        </PressableButton>
      </View>
    </View>
  );
}
