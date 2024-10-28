import { TouchableOpacity } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';

type MovieCardProps = {
  poster: string;
  onMoviePress: () => void;
};

export default function MovieCard({ poster, onMoviePress }: MovieCardProps) {
  return (
    <TouchableOpacity onPress={onMoviePress}>
      <Image
        source={{
          uri: poster,
        }}
        style={{
          width: 150,
          height: 200,
          borderRadius: 10,
        }}
      />
    </TouchableOpacity>
  );
}
