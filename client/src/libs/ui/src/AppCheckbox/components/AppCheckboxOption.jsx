import React from 'react';
import  {AppIcon}  from '../../AppIcon';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import { Colors, Typography } from 'libs/ui/src/WebButton/node_modules/libs/ui/src/WebLoading/node_modules/colibri/styles';
import { AppCheckboxOptionType } from '../AppCheckbox.interface';
import { AppText } from '../../AppText';

export interface AppCheckboxOptionProps<T> {
	option: AppCheckboxOptionType<T>;
	checked?: boolean;
	onPress: (option: AppCheckboxOptionType<T>) => void;
	scheme?: 'light' | 'dark';
	isHtml?: boolean;
	layout?: {
    spacing?: number;
    checkboxSize?: number;
    fontSize?: number;
  };
}

export function AppCheckboxOption<T = any>({ option, checked, onPress, layout, scheme, isHtml }: AppCheckboxOptionProps<T>) {

	const styles = StyleSheet.create({
    item: {
      marginVertical: layout?.spacing ?? 12,
      flexDirection: 'row' as 'row',
      alignItems: 'center' as 'center',
    },
    checkbox: {
      width: layout?.checkboxSize ?? 26,
      height: layout?.checkboxSize ?? 26,
      borderRadius: 6,
      marginRight: layout?.checkboxSize ?? 25,
      backgroundColor: scheme === 'light' ? Colors.white : 'transparent',
      borderColor: Colors.purpleLight,
      borderWidth: 2,
    },
    selectedCheckbox: {
      backgroundColor: Colors.green,
      borderWidth: 0,
    },
    icon: {
      margin: 2,
      color: Colors.white,
    },
    label: {
      ...Typography.labelDefault,
      color: scheme === 'light' ? Colors.purple : Colors.white + '88',
      marginTop: 1,
      flex: 1,
    },
    htmlLabel: {
      fontSize: layout?.fontSize ?? 16,
			lineHeight: (layout?.fontSize ?? 16) * 1.5,
      flex: 1,
      marginBottom: 0,
    },
    box: {},
	});
	
	const handlePress = () => onPress(option);

	const label = (isHtml) ? <AppText style={styles.htmlLabel}>{option.label}</AppText> : 
		<Text style={[styles.label, checked ? {} : {}]}>{option.label}</Text>;

	return (
    <TouchableOpacity
      style={styles.item}
      onPress={handlePress}
      onLongPress={handlePress}
    >
      <View style={[styles.checkbox, checked ? styles.selectedCheckbox : {}]}>
        {checked && (
          <AppIcon
            name="check"
            size={layout?.checkboxSize ? layout.checkboxSize * 0.85 : 22}
            style={styles.icon}
          />
        )}
      </View>
      {label}
		</TouchableOpacity>
	);

}