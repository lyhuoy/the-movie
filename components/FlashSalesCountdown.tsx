import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { primaryColor, textColor } from '@/constants/Colors';

export default function FlashSalesCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 2,
    seconds: 0,
  });

  useEffect(() => {
    const targetTime = new Date().getTime() + 2 * 60 * 1000;

    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        clearInterval(intervalId);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time: number) => String(time).padStart(2, '0');

  const TimeUnit = ({ label, value }: { label: string; value: number }) => (
    <View style={styles.unitContainer}>
      <Text style={styles.unitValue}>{formatTime(value)}</Text>
      <Text style={styles.unitLabel}>{label}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TimeUnit label="Day" value={timeLeft.days} />
      <Entypo name="dots-two-vertical" size={14} color={primaryColor} />
      <TimeUnit label="Hour" value={timeLeft.hours} />
      <Entypo name="dots-two-vertical" size={14} color={primaryColor} />
      <TimeUnit label="Min" value={timeLeft.minutes} />
      <Entypo name="dots-two-vertical" size={14} color={primaryColor} />
      <TimeUnit label="Sec" value={timeLeft.seconds} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  unitContainer: {
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  unitValue: {
    fontWeight: 'bold',
    color: textColor,
    fontSize: 12,
  },
  unitLabel: {
    fontSize: 10,
    color: primaryColor,
    fontWeight: 'bold',
  },
});
