import { Dimensions, FlatList, ScrollView, Text, View } from 'react-native';
import React from 'react';
import HeaderNavigation from '@/components/wingmall/HeaderNavigation';
import { backgroundColor, borderColor, subtextColor } from '@/constants/Colors';
import { Image, ImageBackground } from 'expo-image';
import { BlurView } from 'expo-blur';
import { DottedDivider } from '@/components/DotDivider';
import { activeWingpoint, recentTransactions } from '@/constants/dummy';
import PressableButton from '@/components/PressableButton';

export default function WingWallet() {
  const [activeTab, setActiveTab] = React.useState(1);
  const { width, height } = Dimensions.get('screen');
  const IMAGE_WIDTH = width * 0.85;
  const IMAGE_HEIGHT = height * 0.22;
  const SNAP_INTERVAL = width * 0.85 + 10;
  const primaryColor = '#013593';

  const onPressTab = (tab: number) => {
    setActiveTab(tab);
  };

  const WINGMALL = [
    {
      id: 1,
      title: 'Wingpoint',
      description:
        'You can spend on available items across many stores on this',
      extraDescription: 'Planet',
      pricePoint: 168,
      cardDescription: 'Available on Food, Shopping, and Groceries',
      username: 'John Snow',
      termAndCondition: 'T&C',
      backgroundImage:
        'https://e0.pxfuel.com/wallpapers/896/716/desktop-wallpaper-argentina-lionel-andres-messi-lionel-messi-argentina-argentina-flag-bandera-de-argentina-3d.jpg',
      icon: 'https://static.vecteezy.com/system/resources/previews/012/658/519/non_2x/wallet-3d-icon-3d-render-concept-free-png.png',
    },

    {
      id: 2,
      title: 'Bitcoin',
      description:
        'You can use the voucher on available items on the specific store that has cash back promotion.',
      extraDescription: 'Planet',
      pricePoint: 999,
      cardDescription: 'Available on Food, Shopping, and Groceries',
      username: 'John Snow',
      termAndCondition: 'T&C',
      backgroundImage: 'https://wallpapercave.com/wp/wp8215873.jpg',
      icon: 'https://img.pikbest.com/origin/10/42/66/36spIkbEsTXtJ.png!sw800',
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: backgroundColor,
      }}
    >
      <HeaderNavigation title="Bitcoin" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          gap: 20,
        }}
      >
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 20,
          }}
        >
          <Text
            style={{
              color: subtextColor,
              fontSize: 16,
              flexShrink: 1,
            }}
          >
            You can spend on available items across many stores on this{' '}
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'rgba(0, 0, 0, 0.6)',
              }}
            >
              Planet
            </Text>
          </Text>
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={WINGMALL}
          snapToInterval={SNAP_INTERVAL}
          decelerationRate="fast"
          bounces={false}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{
            paddingHorizontal: 20,
            gap: 10,
          }}
          renderItem={({ item }) => (
            <>
              <ImageBackground
                source={{ uri: item.backgroundImage }}
                style={{
                  width: IMAGE_WIDTH,
                  height: IMAGE_HEIGHT,
                }}
                imageStyle={{
                  borderRadius: 12,
                }}
                contentFit="cover"
              >
                <View
                  style={{
                    flex: 1,
                    borderRadius: 12,
                    overflow: 'hidden',
                  }}
                >
                  <BlurView
                    intensity={25}
                    style={{
                      flex: 1,
                      padding: 14,
                    }}
                  >
                    <Image
                      source={{ uri: item.icon }}
                      style={{
                        width: 100,
                        height: 100,
                        right: -5,
                        top: -5,
                        position: 'absolute',
                      }}
                      contentFit="cover"
                    />
                    <Text
                      style={{
                        color: '#fdcc01',
                        fontSize: 25,
                        fontWeight: 'bold',
                      }}
                    >
                      {item.title}
                    </Text>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                        gap: 15,
                      }}
                    >
                      <View
                        style={{
                          gap: 5,
                        }}
                      >
                        <Text
                          style={{
                            color: 'white',
                            fontSize: 30,
                            fontWeight: 'bold',
                            marginTop: 10,
                          }}
                        >
                          {item.title === 'Wingmall' && '$'} {item.pricePoint}
                        </Text>
                        <Text
                          style={{
                            color: 'white',
                            fontSize: 12,
                            flexShrink: 1,
                          }}
                        >
                          {item.cardDescription}
                        </Text>
                      </View>
                      <DottedDivider />
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <Text
                          style={{
                            color: 'white',
                            fontSize: 16,
                          }}
                        >
                          {item.username}
                        </Text>
                        <Text
                          style={{
                            color: 'white',
                            fontSize: 14,
                          }}
                        >
                          {item.termAndCondition}
                        </Text>
                      </View>
                    </View>
                  </BlurView>
                </View>
              </ImageBackground>
            </>
          )}
        />
        <View
          style={{
            backgroundColor: borderColor,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 3,
            borderRadius: 50,
            marginHorizontal: 20,
          }}
        >
          <PressableButton
            disabled={activeTab === 1}
            onPress={() => onPressTab(1)}
            style={{
              backgroundColor: activeTab === 1 ? 'white' : 'transparent',
              borderRadius: 50,
              paddingVertical: 12,
              paddingHorizontal: 10,
              flex: 1,
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: activeTab === 1 ? primaryColor : 'gray',
                fontWeight: '600',
                fontSize: 15,
              }}
            >
              Recent Transactions
            </Text>
          </PressableButton>
          <PressableButton
            disabled={activeTab === 2}
            onPress={() => onPressTab(2)}
            style={{
              backgroundColor: activeTab === 2 ? 'white' : 'transparent',
              borderRadius: 50,
              paddingVertical: 12,
              paddingHorizontal: 10,
              flex: 1,
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: activeTab === 2 ? primaryColor : 'gray',
                fontWeight: '600',
              }}
            >
              Active Wingpoints
            </Text>
          </PressableButton>
        </View>

        <FlatList
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          data={activeTab === 1 ? recentTransactions : activeWingpoint}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{
            paddingHorizontal: 20,
            gap: 10,
            paddingBottom: 40,
          }}
          renderItem={({ item }) => (
            <View
              style={{
                gap: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                }}
              >
                {item.date}
              </Text>
              <View
                style={{
                  backgroundColor: 'white',
                  padding: 12,
                  borderRadius: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 10,
                    alignItems: 'center',
                  }}
                >
                  <Image
                    source={{ uri: item.icon }}
                    style={{
                      width: 45,
                      height: 45,
                    }}
                    contentFit="cover"
                  />
                  <View
                    style={{
                      flexShrink: 1,
                      gap: 5,
                    }}
                  >
                    <Text
                      style={{
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
                      {item.title === 'Wingpoints'
                        ? 'Expired Date'
                        : 'Transactions Date'}
                      : {item.transactionData}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5,
                    backgroundColor: backgroundColor,
                    borderRadius: 5,
                    paddingHorizontal: 8,
                  }}
                >
                  <Text
                    style={{
                      color: 'green',
                      fontWeight: 'bold',
                    }}
                  >
                    +{item.transactionAmount}
                  </Text>
                  <Image
                    source={{ uri: item.icon }}
                    style={{
                      width: 16,
                      height: 16,
                    }}
                    contentFit="cover"
                  />
                </View>
              </View>
            </View>
          )}
          ListFooterComponent={() => (
            <View
              style={{
                padding: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  color: 'gray',
                  fontSize: 12,
                }}
              >
                No More Data
              </Text>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
}
