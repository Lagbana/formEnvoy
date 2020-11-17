/* Screen title
=============================== */

import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import { Typography, Colors } from 'libs/ui/src/WebButton/node_modules/libs/ui/src/WebLoading/node_modules/colibri/styles';

export interface AppTitleProps {
	color: string;
	style: TextStyle;
}

export const AppTitle: React.FC<AppTitleProps> = ({ children, color = 'text', ...props }) => {
  // styles

  const styles = StyleSheet.create({
    container: {
      ...Typography.titleLarge,
      color: Colors[color],
    },
  });

  return <Text style={[styles.container, props.style]}>{children}</Text>;
};
