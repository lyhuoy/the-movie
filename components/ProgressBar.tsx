import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const animatedProgress = useSharedValue(0);

  useEffect(() => {
    animatedProgress.value = withTiming(progress, { duration: 2000 });
  }, [progress]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${animatedProgress.value}%`,
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.bar, animatedStyle]} />
      <Text>{Math.round(animatedProgress.value)}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 10,
  },
  bar: {
    height: 5,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});

export default ProgressBar;
