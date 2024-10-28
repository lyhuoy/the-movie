import { TouchableOpacity } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';

type MovieSeriesCardProps = {
  poster: string;
  onMoviePress: () => void;
};

export default function MovieSeriesCard({
  poster,
  onMoviePress,
}: MovieSeriesCardProps) {
  return (
    <TouchableOpacity onPress={onMoviePress}>
      <Image
        source={{
          uri: poster,
        }}
        style={{
          width: 240,
          height: 140,
          borderRadius: 10,
        }}
      />
    </TouchableOpacity>
  );
}
