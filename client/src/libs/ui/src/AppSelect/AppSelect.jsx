/* Picker
=============================== */

import React from 'react';
import { Platform, ViewStyle } from 'react-native';
import { AppSelectWeb } from './AppSelectWeb'
import { AppSelectNative } from './AppSelectNative';
import { AppSelectListItemProps, AppSelectSearchItemProps, AppSelectItem } from './AppSelect.interface';
import { Maybe } from 'colibri/common';

export interface AppSelectProps<T = any> {
	children?: React.ReactNode;
	placeholder?: string;
	keyExtractor: (val: AppSelectItem<T>) => string;
  value?: Maybe<T>;
  onChange?: (value: AppSelectItem<T>) => void;
  onBlur?: () => void;
	items: AppSelectItem<T>[];
	filter?: (item: AppSelectItem<T>) => boolean;
  listItem?: (props: AppSelectListItemProps<T>) => React.ReactElement;
	searchItem?: React.ComponentType<AppSelectSearchItemProps>;
	style?: ViewStyle
}

export function AppSelect<T>(props: AppSelectProps<T>) {

	switch (Platform.OS) {
		case 'web':
			return <AppSelectWeb {...props} />;
		default:
			return <AppSelectNative {...props} />;
	}
	
};
