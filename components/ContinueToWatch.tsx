import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import MovieCard from './MovieCard';
import { useRouter } from 'expo-router';
import ContinueWatchCard from './ContinueWatchCard';

type ContinueToWatchProps = {
  title: string;
  onSeeAllPress?: () => void;
  data: any;
};

export default function ContinueToWatch({
  title,
  data,
  onSeeAllPress,
}: ContinueToWatchProps) {
  const router = useRouter();
  const onMoviePress = (item: any) => {
    router.navigate({
      pathname: '/watchMovie/movieDetail',
      params: item,
    });
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 24,
            fontWeight: 'semibold',
          }}
        >
          {title}
        </Text>
        <TouchableOpacity onPress={onSeeAllPress}>
          <Text
            style={{
              color: 'gray',
              fontSize: 16,
              fontWeight: 'semibold',
            }}
          >
            See all
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          gap: 10,
          paddingHorizontal: 20,
        }}
        initialNumToRender={4}
        removeClippedSubviews
        maxToRenderPerBatch={10}
        windowSize={5}
        renderItem={({ item }) => (
          <ContinueWatchCard
            poster={item.poster}
            onMoviePress={() => onMoviePress(item)}
            progress={Math.floor(Math.random() * 100)}
          />
        )}
      />
    </View>
  );
}
