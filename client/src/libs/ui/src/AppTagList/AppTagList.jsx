import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { AppTag } from '../AppTagList/components/AppTag';
import { AppTagType } from './AppTagList.interface';

export interface AppTagListProps<T> {
  tags: AppTagType<T>[];
  onRemove?: (tag: AppTagType<T>) => void;
  editable?: boolean;
  style?: ViewStyle;
}

export function AppTagList<T>({
  tags = [],
  onRemove,
  editable = true,
  style,
}: AppTagListProps<T>) {

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginVertical: 20,
    },
	});

  return (
    <View style={[styles.container, style]}>
      {tags.map((item, index) => (
        <AppTag
          key={index}
          tag={item}
          onPress={() => { if (onRemove) { onRemove(item) } }}
          editable={editable}
        />
      ))}
    </View>
  );
};
