/* Password hints
=============================== */

import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Typography, Colors } from 'libs/ui/src/WebButton/node_modules/libs/ui/src/WebLoading/node_modules/colibri/styles';
import { AppIcon } from '../AppIcon';
import { useTranslations } from '../useTranslations';

export interface AppPasswordHintsRule {
	label: string;
	vars: { num: number };
	check: (t: string) => boolean;
}

export interface AppPasswordHintsProps {
	rules?: AppPasswordHintsRule[];
	password: string;
	visible?: boolean;
	invalidColor?: string;
	validColor?: string;
	style?: ViewStyle;
}

export const AppPasswordHints: React.FC<AppPasswordHintsProps> = ({
  password,
  visible = false,
  invalidColor = 'gray',
	validColor = 'green',
	rules = [],
  ...props
}) => {
  const { translate } = useTranslations();

  // styles

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 8,
    },
    rule: {
      width: '50%',
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 2,
    },
    validRule: {},
    icon: {
      width: 16,
      height: 16,
      marginRight: 8,
      color: Colors[invalidColor],
      opacity: 0.5,
    },
    validIcon: {
      color: Colors[validColor],
      opacity: 1,
    },
    label: {
      ...Typography.labelXsmall,
      color: Colors[invalidColor],
    },
    validLabel: {
      color: Colors[validColor],
    },
  });

  return (
    <>
      {visible && (
        <View {...props} style={[styles.container, props.style]}>
          {rules.map(({ label, vars, check }, index) => (
            <View
              key={index}
              style={[styles.rule, check(password) ? styles.validRule : '']}
            >
              <AppIcon
                name={check(password) ? 'check' : 'x'}
                size={16}
                style={[
                  styles.icon,
                  check(password) ? styles.validIcon : undefined,
                ]}
              />
              <Text
                style={[
                  styles.label,
                  check(password) ? styles.validLabel : undefined,
                ]}
              >
                {translate(label, vars)}
              </Text>
            </View>
          ))}
        </View>
      )}
    </>
  );
};
