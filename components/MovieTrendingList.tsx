import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import MovieCard from './MovieCard';

type MovieTrendingListProps = {
  title: string;
  onSeeAllPress?: () => void;
  data: any;
};

export default function MovieTrendingList({
  title,
  data,
  onSeeAllPress,
}: MovieTrendingListProps) {
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
          <MovieCard
            poster={item.poster}
            onMoviePress={() => onMoviePress(item)}
          />
        )}
      />
    </View>
  );
}
