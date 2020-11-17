/* Base input template
=============================== */

import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Colors } from 'libs/ui/src/WebButton/node_modules/libs/ui/src/WebLoading/node_modules/colibri/styles';
import { AppIcon } from '../../AppIcon';

export interface BaseInputProps {
  style?: ViewStyle;
  icon?: string;
  iconPosition?: 'left' | 'right';
}

export const BaseInput: React.FC<BaseInputProps> = ({
  style,
  children,
  icon,
  iconPosition = 'left',
}) => {
  // styles

  const styles = StyleSheet.create({
    baseInput: {
      backgroundColor: '#fff',
      padding: 15,
      marginTop: 10,
      marginBottom: 10,
      width: '100%',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 4,
      shadowOpacity: 0.1,
      elevation: 5,
    },
    icon: {
      marginRight: iconPosition === 'left' ? 16 : 2,
      marginLeft: iconPosition === 'left' ? 2 : 16,
    },
  });

  return (
    <View style={[styles.baseInput, style]}>
      {icon && (
        <AppIcon
          name={icon}
          color={Colors.blueLight}
          size={24}
          style={styles.icon}
        />
      )}
      {children}
    </View>
  );
};
