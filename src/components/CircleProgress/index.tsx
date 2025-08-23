import React, { useRef, useEffect } from 'react';
import { View, Animated, Easing, StyleSheet, Text } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { fonts } from '../../utils/Themes/fonts';
import sizeHelper from '../../utils/Helpers';
import { theme } from '../../utils/Themes';

const CircleProgressWithText = ({
  current = 1,       // Current progress value (e.g., 45)
  total = 40,         // Total value (e.g., 60)
  size = 110,
  strokeWidth = 15,
  color = theme.colors.primary,
  backgroundColor = '#D5FF5F20',
  duration = 1000,
  textColor = theme.colors.white,
  showText = true,
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const animatedCurrentValue = useRef(new Animated.Value(0)).current;

  // Calculate percentage for the circle animation
  const progress = (current / total) * 100;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(animatedValue, {
        toValue: progress,
        duration: duration,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(animatedCurrentValue, {
        toValue: current,
        duration: duration,
        easing: Easing.out(Easing.ease),
        useNativeDriver: false, // Text animation doesn't support native driver
      }),
    ]).start();
  }, [current, total, duration]);

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [circumference, 0],
  });

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Svg width={size} height={size} style={styles.svg}>
        {/* Background circle */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress circle */}
        <AnimatedCircle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="transparent"
          origin={`${size / 2}, ${size / 2}`}
          rotation="-90"
        />
      </Svg>
     
        <View style={styles.textContainer}>
          <Animated.Text style={[styles.text, { color: textColor }]}>
            {animatedCurrentValue.interpolate({
              inputRange: [0, total],
              outputRange: ['0', `${total}`],
            })}
          </Animated.Text>
          <Text style={[styles.text, { color: textColor }]}>/</Text>
          <Text style={[styles.text, { color: textColor }]}>{total}</Text>
        </View>
 
    </View>
  );
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:"center"
  },
  svg: {
    position: 'absolute',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontWeight: "600",
    fontFamily:fonts.Inter_Medium,
    fontSize: sizeHelper.calWp(30),
  },
});

export default CircleProgressWithText;