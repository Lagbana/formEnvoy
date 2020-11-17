/* Scroll view with gradient edges
=============================== */

import React, { forwardRef, PropsWithChildren } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  ViewStyle,
  ScrollViewProps,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import hexToRgba from 'hex-to-rgba';
import { Colors } from 'libs/ui/src/WebButton/node_modules/libs/ui/src/WebLoading/node_modules/colibri/styles';

export interface AppScrollViewProps extends ScrollViewProps {
  vertical?: boolean;
  horizontal?: boolean;
  start?: boolean;
  end?: boolean;
  size?: number;
  color?: string;
  scrollVar?: Animated.Value;
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
}

export const AppScrollView = forwardRef<
  ScrollView,
  PropsWithChildren<AppScrollViewProps>
>((props, scrollViewRef) => {
  const {
    children,
    vertical = true,
    horizontal = false,
    start = true,
    end = true,
    size = 15,
    color = 'white',
    scrollVar = undefined,
    contentContainerStyle = undefined,
    style = undefined,
    ...scrollViewProps
  } = props;

  const scrollHandler = scrollVar
    ? Animated.event([{ nativeEvent: { contentOffset: { y: scrollVar } } }], {
        useNativeDriver: true,
      })
    : () => null;

  // styles

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollview: {},
    topGradient: {
      height: size,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
    },
    bottomGradient: {
      height: size,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    leftGradient: {
      width: size,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
    },
    rightGradient: {
      width: size,
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
    },
  });

  return (
    <View style={[styles.container, style]}>
      <Animated.ScrollView
        {...scrollViewProps}
        ref={scrollViewRef || undefined}
        /* vertical={vertical} // scrollview doesn't take vertical, not sure why this was specified */ horizontal={
          horizontal
        }
        style={styles.scrollview}
        contentContainerStyle={{
          paddingVertical: size * 0.5,
          flexGrow: 1,
          ...contentContainerStyle,
        }}
        scrollEventThrottle={1}
        onScroll={scrollHandler}
      >
        {children}
      </Animated.ScrollView>
      {vertical && start && (
        <LinearGradient
          colors={[hexToRgba(Colors[color], 1), hexToRgba(Colors[color], 0)]}
          style={styles.topGradient}
        />
      )}
      {vertical && end && (
        <LinearGradient
          colors={[hexToRgba(Colors[color], 0), hexToRgba(Colors[color], 1)]}
          style={styles.bottomGradient}
        />
      )}
      {horizontal && start && (
        <LinearGradient
          colors={[hexToRgba(Colors[color], 1), hexToRgba(Colors[color], 0)]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.leftGradient}
        />
      )}
      {horizontal && end && (
        <LinearGradient
          colors={[hexToRgba(Colors[color], 0), hexToRgba(Colors[color], 1)]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.rightGradient}
        />
      )}
    </View>
  );
});
