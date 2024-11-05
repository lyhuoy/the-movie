// CustomTabBar.js
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function CustomTabBar({ state, descriptors, navigation }) {
  const insets = useSafeAreaInsets();

  const renderIcon = (name: string, focused: boolean) => {
    switch (name) {
      case 'home':
        return (
          <MaterialIcons
            name={focused ? 'explore' : 'explore-off'}
            size={24}
            color="black"
          />
        );

      case 'promo':
        return <MaterialIcons name="discount" size={24} color="black" />;
      case 'cart':
        return <MaterialIcons name="discount" size={24} color="black" />;
      case 'profile':
        return <MaterialIcons name="discount" size={24} color="black" />;
      default:
        return <MaterialIcons name="discount" size={24} color="black" />;
    }
  };

  return (
    <View style={[styles.container]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title
            ? options.title
            : route.name;

        const iconName = options.tabBarIcon;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        // Render the QR code image in the center tab position
        if (index === 2) {
          return (
            <TouchableOpacity
              key="qr-code"
              onPress={() => console.log('QR Code pressed')}
              style={styles.qrButton}
            >
              <Image
                source={{
                  uri: 'https://pngimg.com/uploads/qr_code/qr_code_PNG10.png',
                }}
                style={styles.qrImage}
              />
            </TouchableOpacity>
          );
        }

        // Render other tabs
        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tabButton}
          >
            {renderIcon(iconName, isFocused)}
            <Text
              style={{
                color: isFocused ? '#000080' : '#808080',
                fontSize: 11,
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 25,
    borderTopColor: '#ddd',
  },
  qrButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    position: 'relative',
    top: -40,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
  },
  qrImage: {
    width: 40,
    height: 40,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
  },
});
