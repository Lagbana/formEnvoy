/* Full screen spinner
=============================== */

import React from 'react';
import { View } from 'react-native';

import { AppActivityIndicator } from '../AppActivityIndicator';
import { Colors } from 'libs/ui/src/WebButton/node_modules/libs/ui/src/WebLoading/node_modules/colibri/styles';

export const AppSpinner = ({ color = 'purple', ...props }) => {
  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: Colors[color],
      }}
    >
			<AppActivityIndicator color={Colors.white} size="large" />
    </View>
  );
};
