import {
  StyleProp,
  ViewStyle,
  TouchableWithoutFeedback,
  GestureResponderEvent,
} from 'react-native';
import React, { MouseEvent } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

type PressableButtonProps = {
  children: React.ReactNode;
  onPress?: (
    e: MouseEvent<HTMLAnchorElement, MouseEvent> | GestureResponderEvent
  ) => void;
  style?: StyleProp<ViewStyle> | StyleProp<ViewStyle>[];
  disabled?: boolean;
};

export default function PressableButton({
  children,
  onPress,
  style,
  disabled,
}: PressableButtonProps) {
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(scale.value, {
            duration: 150,
            easing: Easing.out(Easing.cubic),
          }),
        },
      ],
    };
  });

  const handlePressIn = () => {
    scale.value = 0.96;
  };

  const handlePressOut = () => {
    scale.value = 1;
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      disabled={disabled}
      hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
    >
      <Animated.View style={[animatedStyle, style]}>{children}</Animated.View>
    </TouchableWithoutFeedback>
  );
}
