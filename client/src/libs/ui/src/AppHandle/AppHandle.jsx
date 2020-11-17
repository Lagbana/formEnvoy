/* Handle
=============================== */

import React from 'react';
import { View, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

export interface AppHandleProps {
  onPress?: () => void;
  width?: number;
  style?: ViewStyle;
}

export const AppHandle: React.FC<AppHandleProps> = ({
  onPress = () => null,
  width = 70,
  style,
}) => {
  // styles

  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
    },
    handle: {
      width: width,
      height: 4,
      borderRadius: 3,
      backgroundColor: '#999',
      opacity: 0.35,
      marginRight: 'auto',
      marginLeft: 'auto',
    },
  });

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={{ width: '100%', padding: 10 }}
        onPress={onPress}
      >
        <View style={styles.handle} />
      </TouchableOpacity>
    </View>
  );
};
