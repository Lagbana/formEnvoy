/* Entry on settings screen
=============================== */

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AppToggleSwitch } from '../AppToggleSwitch';
import { Typography, Colors } from 'libs/ui/src/WebButton/node_modules/libs/ui/src/WebLoading/node_modules/colibri/styles';
import { AppIcon } from '../AppIcon';

export interface AppSettingProps{
	color: string;
  icon?: string;
  label:string;
  children?:any;
  value?: boolean;
  onPress? : () => void;
  onToggle? : () => void;
  //...props;
}

export const AppSetting = (props: AppSettingProps) => {
  // funcs

  const [pressable, setPressable] = useState(
    props.onPress !== null || props.onToggle !== null
  );

  const pressHandler = () => {
    if (props.onPress) {
      props.onPress();
    }
    if (props.onToggle) {
      props.onToggle();
    }
  };

  // styles

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      flexDirection: 'row',
      marginVertical: 14,
    },
    iconHolder: {
      width: 36,
      height: 36,
      marginRight: 15,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 2,
      borderRadius: 8,
    },
    icon: {
      color: Colors.white,
    },
    mainLabel: {
      marginBottom: 4,
      paddingRight: 20,
    },
    secondaryLabel: {
      marginBottom: 4,
      marginLeft: 'auto',
      color: Colors.gray,
      opacity: 0.65,
    },
    arrow: {
      color: Colors.gray,
      width: 24,
      height: 24,
      marginLeft: 8,
      opacity: 0.65,
    },
  });

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={pressHandler}
      disabled={!pressable}
    >
      {props.icon && (
        <View style={[styles.iconHolder, { backgroundColor: Colors[props.color] }]}>
          {props.icon && <AppIcon name={props.icon} size={20} style={styles.icon} />}
        </View>
      )}
      <View style={{ flex: 1, marginRight: 20 }}>
        <Text
          style={{ ...styles.mainLabel, ...Typography.bodySmall }}
          numberOfLines={2}
        >
          {props.children}
        </Text>
      </View>
      {props.onToggle && (
        <View pointerEvents="none">
          <AppToggleSwitch enabled={props.value} />
        </View>
      )}
      {!props.onToggle && pressable && (
        <>
          <Text style={{ ...styles.secondaryLabel, ...Typography.bodySmall }}>
            {props.label}
          </Text>
          <AppIcon name="chevron-right" size={24} style={styles.arrow} />
        </>
      )}
      {!pressable && (
        <>
          <Text style={{ ...styles.secondaryLabel, ...Typography.bodySmall }}>
            {props.label}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};
