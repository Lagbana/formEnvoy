/* Entry on settings screen
=============================== */

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Typography, Colors } from 'libs/ui/src/WebButton/node_modules/libs/ui/src/WebLoading/node_modules/colibri/styles';
import { AppIcon } from '../../AppIcon';
import { AppSelectSearchItemProps } from '../AppSelect.interface';

export const AppSelectSearchItem: React.FC<AppSelectSearchItemProps> = ({
  onClose,
  onBack,
  title = '',
}) => {
  // styles

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 10,
      paddingVertical: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    icon: {
      color: Colors.gray,
      padding: 10,
    },
    title: {
      ...Typography.bodyLarge,
      color: Colors.blue,
      paddingTop: 0,
      paddingBottom: 6,
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBack}>
        <AppIcon name="arrow-left" style={styles.icon} size={24} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onBack}>
        <AppIcon name="x" style={styles.icon} size={24} />
      </TouchableOpacity>
    </View>
  );
};
