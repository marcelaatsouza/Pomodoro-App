import { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const radius = 160;
const strokeWidth = 5;
const circumference = 2 * Math.PI * radius;
const center = radius + strokeWidth;

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const ProgressBar = ({ progress }) => {
  const animatedOffset = useRef(new Animated.Value(circumference)).current;
  const [dotPosition, setDotPosition] = useState({ x: center, y: center });

  useEffect(() => {
    const toOffset = circumference * (1 - progress);
    Animated.timing(animatedOffset, {
      toValue: toOffset,
      duration: 500,
      useNativeDriver: false,
    }).start();

    const angle = 2 * Math.PI * progress - Math.PI / 2;

    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);

    setDotPosition({ x, y });
  }, [progress]);

  return (
    <View style={styles.container}>
      <Svg width={center * 2} height={center * 2}>
        <Circle
          stroke="#EEE"
          fill="none"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />

        <AnimatedCircle
          stroke="#000"
          fill="none"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={animatedOffset}
          strokeLinecap="round"
          rotation="-90"
          originX={center}
          originY={center}
        />
      </Svg>

      {progress > 0 && (
        <View
          style={[
            styles.dot,
            {
              left: dotPosition.x - 8,
              top: dotPosition.y - 8,
            },
          ]}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    position: 'absolute',
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#FFF',
    borderWidth: 3,
    borderColor: '#000',
  },
});
