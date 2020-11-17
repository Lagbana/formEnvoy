import React from 'react';
import { Platform } from 'react-native';
import { AppModal as AppModalNative } from './components/AppModal.native';
import { AppModal as AppModalWeb } from './components/AppModal.web';

export const AppModal: React.FC<any> = (props) => {
  switch (Platform.OS) {
    case 'ios':
    case 'android':
      return <AppModalNative {...props} />;
    default:
      return <AppModalWeb {...props} />;
  }
};
