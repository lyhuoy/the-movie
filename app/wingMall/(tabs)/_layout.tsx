import React from 'react';
import { Tabs } from 'expo-router';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { TouchableOpacity, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import PressableButton from '@/components/PressableButton';

export default function WingmallTabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#013593',
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          height: 90,
          shadowColor: 'gray',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: 'center' }}>
              {focused && (
                <View
                  style={{
                    position: 'absolute',
                    top: -12,
                    height: 2,
                    width: '32%',
                    backgroundColor: '#013593',
                  }}
                />
              )}
              <MaterialIcons name="explore" size={24} color={color} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="promo"
        options={{
          title: 'Promo',
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: 'center' }}>
              {focused && (
                <View
                  style={{
                    position: 'absolute',
                    top: -12,
                    height: 2,
                    width: '32%',
                    backgroundColor: '#013593',
                  }}
                />
              )}
              <MaterialIcons name="discount" size={24} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: 'Scan',
          tabBarButton: (prop) => (
            <PressableButton
              style={{
                alignItems: 'center',
                backgroundColor: 'white',
                justifyContent: 'center',
                width: 65,
                height: 65,
                top: -15,
                borderRadius: 50,
                padding: 3,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}
              onPress={prop.onPress as (event: any) => void}
            >
              <LinearGradient
                colors={['#FFDF00', '#DAA520']}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <MaterialCommunityIcons
                  name="qrcode-scan"
                  size={35}
                  color={'white'}
                />
              </LinearGradient>
            </PressableButton>
          ),
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          title: 'Order',
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: 'center' }}>
              {focused && (
                <View
                  style={{
                    position: 'absolute',
                    top: -12,
                    height: 2,
                    width: '32%',
                    backgroundColor: '#013593',
                  }}
                />
              )}
              {focused ? (
                <Ionicons name="bag-handle" size={24} color={color} />
              ) : (
                <Ionicons name="bag-handle-outline" size={24} color={color} />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: 'center' }}>
              {focused && (
                <View
                  style={{
                    position: 'absolute',
                    top: -12,
                    height: 2,
                    width: '32%',
                    backgroundColor: '#013593',
                  }}
                />
              )}
              {focused ? (
                <FontAwesome5 name="user-alt" size={24} color={color} />
              ) : (
                <FontAwesome5 name="user" size={24} color={color} />
              )}
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
