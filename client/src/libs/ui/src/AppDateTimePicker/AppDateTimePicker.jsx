import React from 'react';
import { Platform } from 'react-native';
import { AppDateTimePicker as AppDateTimePickerNative } from './components/AppDateTimePicker.native';
import { AppDateTimePicker as AppDateTimePickerWeb } from './components/AppDateTimePicker.web';
import { AppDateTimePickerProps } from './AppDateTimePicker.interface';

export const AppDateTimePicker: React.FC<AppDateTimePickerProps> = (props) => {
  switch (Platform.OS) {
    case 'ios':
    case 'android':
      return <AppDateTimePickerNative {...props} />;
    default:
      return <AppDateTimePickerWeb {...props} />;
  }
};
