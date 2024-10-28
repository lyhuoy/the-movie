import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import ProgressBar from './ProgressBar';

type ContinueWatchCardProps = {
  poster: string;
  onMoviePress: () => void;
  progress: number;
};

export default function ContinueWatchCard({
  poster,
  onMoviePress,
  progress,
}: ContinueWatchCardProps) {
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
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          padding: 15,
          gap: 5,
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 12,
            fontWeight: 'semibold',
            textAlign: 'right',
          }}
        >
          58min
        </Text>
        <ProgressBar progress={progress} />
      </View>
    </TouchableOpacity>
  );
}
