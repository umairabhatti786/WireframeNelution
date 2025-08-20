import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Text } from 'react-native';
import { theme } from '../../utils/Themes';
import sizeHelper from '../../utils/Helpers';
import CustomText from '../Text';

const CustomProgressBar = ({ total = 100, progress = 0, title = '' }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const percentage = (progress / total) * 100;

    Animated.timing(animatedValue, {
      toValue: percentage,
      duration: 800,
      useNativeDriver: false,
    }).start();
  }, [progress, total]);

  const widthInterpolated = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      {title && (
        <CustomText text={title} color={theme.colors.white} size={21} />
      )}
      <View style={styles.progressBackground}>
        <Animated.View
          style={[styles.progressBar, { width: widthInterpolated }]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    gap: sizeHelper.calHp(10),
  },
  progressBackground: {
    height: sizeHelper.calWp(11),
    width: '100%',
    backgroundColor: '#A0D0C6',
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: theme.colors.primary,
    borderRadius: 6,
  },
});
export default CustomProgressBar;
