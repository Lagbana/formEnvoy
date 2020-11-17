/* User's map marker
=============================== */

import React from 'react';
import { StyleSheet, View, Animated, Easing, ViewStyle } from 'react-native';
import { Colors } from 'libs/ui/src/WebButton/node_modules/libs/ui/src/WebLoading/node_modules/colibri/styles';
export interface AppUserMapMarkerProps {
	color?: string;
	style?: ViewStyle;
}

export const AppUserMapMarker: React.FC<AppUserMapMarkerProps> = ({ color = 'blue', ...props }) => {
  // vars

  const animValue = new Animated.Value(0);
  const DOT_SIZE = 28;
  const RING_WIDTH = 2;

  // animations

  Animated.loop(
    Animated.sequence([
      Animated.delay(500),
      Animated.timing(animValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
        easing: Easing.linear,
      }),
    ])
  ).start();

  // styles

  const styles = StyleSheet.create({
    container: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 5,
      shadowOpacity: 0.25,
      padding: 15,
      elevation: 4,
    },
    dot: {
      width: DOT_SIZE,
      height: DOT_SIZE,
      backgroundColor: Colors[color],
      borderRadius: DOT_SIZE,
      zIndex: 1,
    },
    ring: {
      width: DOT_SIZE,
      height: DOT_SIZE,
      position: 'absolute',
      top: (DOT_SIZE + RING_WIDTH) / 2,
      left: (DOT_SIZE + RING_WIDTH) / 2,
      borderRadius: DOT_SIZE,
      borderWidth: RING_WIDTH,
      borderColor: Colors[color],
      zIndex: 0,
    },
  });

  const scale = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 2],
  });

  const opacity = animValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0.5, 0],
  });

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.dot} />
      <Animated.View
        style={[styles.ring, { opacity, transform: [{ scale }] }]}
      />
    </View>
  );
};
