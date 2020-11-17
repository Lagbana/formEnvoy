/* Text-based link
=============================== */

import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextStyle,
} from 'react-native';
import { Typography, Colors } from 'libs/ui/src/WebButton/node_modules/libs/ui/src/WebLoading/node_modules/colibri/styles';
import { AppIcon } from '../AppIcon';

export interface AppLinkProps {
  onPress?: () => void;
  icon?: string;
  iconSize?: number;
  iconOpacity?: number;
  color?: string;
  style?: TextStyle;
}

export const AppLink: React.FC<AppLinkProps> = ({
  children,
  onPress,
  icon,
  iconSize = 32,
  iconOpacity = 0.65,
  color = 'blue',
  style,
}) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: style?.textAlign === 'right' ? 'flex-end' : 'flex-start',
    },
    link: {
      color: Colors[color],
      fontSize: Typography.sizes.small,
      lineHeight: Typography.sizes.small * 1.2,
      fontFamily: Typography.families.bold,
      textAlign: style?.textAlign ?? 'left',
    },
    icon: {
      marginRight: 10,
      opacity: iconOpacity,
    },
  });

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      {icon && (
        <AppIcon
          name={icon}
          color={Colors[color]}
          size={iconSize}
          style={styles.icon}
        />
      )}
      <Text style={styles.link}>{children}</Text>
    </TouchableOpacity>
  );
};
