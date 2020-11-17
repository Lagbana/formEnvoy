/* User's map marker (no animation)
=============================== */

import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Colors } from 'libs/ui/src/WebButton/node_modules/libs/ui/src/WebLoading/node_modules/colibri/styles';
export interface AppUserMapMarkerProps {
	color: string;
	style: ViewStyle;
}

export const AppUserMapMarker: React.FC<AppUserMapMarkerProps> = ({ color = 'blue', ...props }) => {
  // vars

  const DOT_SIZE = 28;

  // styles

  const styles = StyleSheet.create({
    container: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 5,
      shadowOpacity: 0.25,
      borderRadius: DOT_SIZE,
      elevation: 4,
    },
    dot: {
      width: DOT_SIZE,
      height: DOT_SIZE,
      backgroundColor: Colors[color],
      borderRadius: DOT_SIZE,
      zIndex: 1,
    },
  });

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.dot} />
    </View>
  );
};
