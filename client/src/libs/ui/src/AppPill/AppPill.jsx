/* Pill shape (icon + text)
=============================== */

import React from 'react';
import { StyleSheet, View, Text, ViewStyle } from 'react-native';
import { Typography, Colors } from 'libs/ui/src/WebButton/node_modules/libs/ui/src/WebLoading/node_modules/colibri/styles';
import { AppIcon, GLYPHS } from '../AppIcon';

export interface AppPillProps {
  icon?: GLYPHS;
  label?: string;
  color?: string;
  style?: ViewStyle;
}

export const AppPill: React.FC<AppPillProps> = ({
  icon,
  label = '',
  color = 'blue',
  style,
}) => {
  // styles

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingVertical: 7,
      paddingHorizontal: 15,
      backgroundColor: Colors[color],
      borderRadius: 99,
    },
    icon: {
      color: '#000',
      opacity: 0.45,
      marginTop: 2,
      marginRight: 6,
    },
    label: {
      ...Typography.labelSmall,
      color: Colors.white,
    },
  });

	const iconDisplay = (icon) ? <AppIcon name={icon} size={18} style={styles.icon} /> : null;

  return (
    <View style={[styles.container, style]}>
			{iconDisplay}
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};
