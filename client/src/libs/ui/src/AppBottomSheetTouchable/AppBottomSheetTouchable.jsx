/* Platform-specific bottom sheet touchable
https://github.com/osdnk/react-native-reanimated-bottom-sheet/issues/16
=============================== */

import React from 'react';
import {
  Platform,
  View,
  TouchableOpacity,
  ViewStyle,
  TouchableOpacityProperties,
} from 'react-native';
import {
  TouchableOpacity as RNGHTouchableOpacity,
  ContainedTouchableProperties,
} from 'react-native-gesture-handler';

export interface BottomSheetTouchableProps
  extends TouchableOpacityProperties,
    ContainedTouchableProperties {
  style?: ViewStyle;
}

export const AppBottomSheetTouchable: React.FC<BottomSheetTouchableProps> = ({
  children,
  style,
  ...props
}) => {
  switch (Platform.OS) {
    case 'android':
      return (
        <RNGHTouchableOpacity {...props}>
          <View style={style}>{children}</View>
        </RNGHTouchableOpacity>
      );
    case 'ios':
      return (
        <TouchableOpacity {...props}>
          <View style={style}>{children}</View>
        </TouchableOpacity>
      );
    default:
      return (
        <TouchableOpacity {...props}>
          <View style={style}>{children}</View>
        </TouchableOpacity>
      );
  }
};
