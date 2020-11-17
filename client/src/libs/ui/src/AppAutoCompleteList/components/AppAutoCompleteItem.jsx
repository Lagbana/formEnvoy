/* Single tag
=============================== */

import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { AppText } from '../../AppText';
import { Typography, Colors } from 'libs/ui/src/WebButton/node_modules/libs/ui/src/WebLoading/node_modules/colibri/styles';
import { AppIcon } from '../../AppIcon';

export interface AppAutoCompleteItemType {
  label: string;
  value: any;
}

export interface AppAutoCompleteItemProps {
  tag: AppAutoCompleteItemType;
  query: string | RegExp;
  onPress?: (value: any) => void;
  style?: ViewStyle;
}

export const AppAutoCompleteItem: React.FC<AppAutoCompleteItemProps> = ({
  tag,
  query,
  onPress,
  style,
}) => {
  const highlightQuery = (label: string) => {
    const regex = new RegExp(query, 'ig');
    return label.replace(regex, '<span class="match">$&</span>');
  };

  // styles

  const styles = StyleSheet.create({
    item: {
      backgroundColor: Colors.grayLight,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 8,
      paddingHorizontal: 14,
      borderRadius: 10,
      marginBottom: 4,
      width: '100%',
    },
    label: {
      marginBottom: 0,
      marginRight: 20,
    },
    icon: {
      marginLeft: 'auto',
      marginRight: -4,
      marginTop: 2,
      color: Colors.green,
    },
  });

  const fontStyle = {
    fontFamily: Typography.families.bold,
  };

  const classesStyles = {
    match: { opacity: 0.7, fontFamily: Typography.families.medium },
  };

  const handlePress = () => {
    if (onPress) {
      onPress(tag.value);
    }
  };

  return (
    <TouchableOpacity style={[style, styles.item]} onPress={handlePress}>
      <AppText
        style={styles.label}
        fontStyle={fontStyle}
        classesStyles={classesStyles}
      >
        {highlightQuery(tag.label)}
      </AppText>
      <AppIcon name="plus" size={28} style={styles.icon} />
    </TouchableOpacity>
  );
};
