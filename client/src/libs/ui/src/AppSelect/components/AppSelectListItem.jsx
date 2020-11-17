/* Entry on settings screen
=============================== */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Typography, Colors } from 'libs/ui/src/WebButton/node_modules/libs/ui/src/WebLoading/node_modules/colibri/styles';
import { AppSelectListItemProps } from '../AppSelect.interface';

export function AppSelectListItem<T = any>({
  item,
  selected = false
}: AppSelectListItemProps<T>) {

  const styles = StyleSheet.create({
    container: {
      borderTopWidth: 1,
      borderColor: Colors.gray + '22',
      backgroundColor: Colors.grayLight,
    },
    label: {
      ...Typography.bodySmall,
      color: Colors.text,
      paddingTop: 12,
      paddingBottom: 12,
      paddingHorizontal: 20,
    },
    selectedLabel: {
      ...Typography.labelSmall,
      color: Colors.purple,
      paddingTop: 16,
      paddingBottom: 12,
      paddingHorizontal: 20,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={[selected ? styles.selectedLabel : styles.label]}>
        {item.Name}
      </Text>
    </View>
  );
};
