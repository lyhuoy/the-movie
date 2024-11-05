import { View, Text, FlatList } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';
import Ionicons from '@expo/vector-icons/Ionicons';
import { primaryColor, secondaryColor, textColor } from '@/constants/Colors';
import PressableButton from '@/components/PressableButton';
import BackButton from '@/components/wingmall/BackButton';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function MyBox() {
  const [activeButton, setActiveButton] = React.useState(1);

  const buttons = [
    {
      id: 1,
      title: 'Announcements',
    },
    {
      id: 2,
      title: 'Personal',
    },
  ];

  const announcements = [
    {
      id: 1,
      title: 'Do you want to win a free trip to Paris?',
      time: '2 hours ago',
    },
    {
      id: 2,
      title: 'Get 50% off on your next purchase',
      time: '3 hours ago',
    },
  ];

  const personal: any = [];

  const keyExtractor = (item: any) => {
    if (activeButton === 1) return item.id.toString();
    return 'personal';
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
          paddingTop: Constants.statusBarHeight + 10,
          backgroundColor: secondaryColor,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 15,
          }}
        >
          <BackButton />
          <Text
            style={{
              color: primaryColor,
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            My Inbox
          </Text>
        </View>
        <PressableButton
          style={{
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            borderRadius: 15,
          }}
        >
          <Ionicons name="ellipsis-vertical" size={14} color={primaryColor} />
        </PressableButton>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
            gap: 15,
          }}
        >
          {buttons.map((button) => (
            <PressableButton
              key={button.id}
              onPress={() => setActiveButton(button.id)}
              style={{
                padding: 10,
                backgroundColor:
                  activeButton === button.id ? primaryColor : 'white',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                paddingVertical: 13,
              }}
            >
              <Text
                style={{
                  color: activeButton === button.id ? 'white' : primaryColor,
                  fontWeight: 'bold',
                }}
              >
                {button.title}
              </Text>
            </PressableButton>
          ))}
        </View>
      </View>
      <FlatList
        data={activeButton === 1 ? announcements : personal}
        keyExtractor={keyExtractor}
        ListEmptyComponent={() => (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              marginTop: 50,
            }}
          >
            <MaterialCommunityIcons
              name="bell"
              size={80}
              color={secondaryColor}
            />
            <Text
              style={{
                color: textColor,
                fontSize: 18,
                fontWeight: 'bold',
              }}
            >
              Your inbox is empty
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'gray',
                textAlign: 'center',
              }}
            >
              Please stay tuned for our upcoming promotions
            </Text>
          </View>
        )}
        contentContainerStyle={{
          paddingHorizontal: 15,
          gap: 15,
          paddingTop: 15,
          flex: 1,
        }}
        renderItem={({ item }) => (
          <PressableButton
            style={{
              flexDirection: 'row',
              gap: 15,
              alignItems: 'center',
            }}
          >
            <View
              style={{
                backgroundColor: 'white',
                width: 35,
                height: 35,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Ionicons name="mail" size={22} color={primaryColor} />
            </View>
            <View
              style={{
                gap: 5,
              }}
            >
              <Text
                style={{
                  color: primaryColor,
                  fontSize: 14,
                  fontWeight: 'bold',
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 12,
                }}
              >
                {item.time}
              </Text>
            </View>
          </PressableButton>
        )}
      />
    </View>
  );
}
