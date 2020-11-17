/* Single tag
=============================== */

import React from 'react';
import { Text, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { Colors, Typography } from 'libs/ui/src/WebButton/node_modules/libs/ui/src/WebLoading/node_modules/colibri/styles';
import { AppIcon } from '../../AppIcon';
import { AppTagType } from '../AppTagList.interface';



export interface AppTagProps<T> {
  tag: AppTagType<T>;
  mode?: string;
  onPress?: (tag: AppTagType<T>) => void;
  editable?: boolean;
  style?: ViewStyle;
}

export function AppTag<T = any>({
  tag,
  mode = 'added',
  onPress = () => null,
  editable = true,
  style,
}: AppTagProps<T>) {
  // styles

  const styles = StyleSheet.create({
    item: {
      backgroundColor: editable
        ? mode === 'add'
          ? Colors.white
          : Colors.purple
        : Colors.gray + '88',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 4,
      paddingHorizontal: 14,
      borderRadius: 30,
      marginRight: 8,
      marginBottom: 6,
      maxWidth: '100%',
    },
    label: {
      ...Typography.labelDefault,
      color: mode === 'add' ? Colors.blue : Colors.white,
    },
    icon: {
      marginLeft: 6,
      marginRight: -2,
      marginTop: 2,
      color: mode === 'add' ? Colors.green : Colors.red,
    },
  });

  return (
    <TouchableOpacity
      style={[style, styles.item]}
      onPress={() => onPress(tag)}
    >
      <Text style={styles.label}>{tag.label}</Text>
      {editable && (
        <AppIcon
          name={mode === 'add' ? 'plus' : 'x'}
          size={20}
          style={styles.icon}
        />
      )}
    </TouchableOpacity>
  );
};
