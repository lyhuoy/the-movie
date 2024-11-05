import { View, StyleSheet } from 'react-native';
import React from 'react';
import { primaryColor } from '@/constants/Colors';

type RadioProps = {
  activeRadio: boolean;
};

export default function Radio({ activeRadio }: RadioProps) {
  return (
    <View style={[styles.radioOuter, { borderColor: primaryColor }]}>
      <View
        style={[
          styles.radioInner,
          {
            backgroundColor: activeRadio ? primaryColor : 'transparent',
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInner: {
    width: 15,
    height: 15,
    borderRadius: 50,
  },
});
