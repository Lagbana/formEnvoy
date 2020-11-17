import React from 'react';
import { Platform } from 'react-native';
import { AppSVGProps } from './AppSVG.interface';
import { AppSVGWeb } from './AppSVGWeb'
import { AppSVGNative } from './AppSVGNative';


export function AppSVG(props: AppSVGProps) {
	switch (Platform.OS) {
		case 'web':
			return <AppSVGWeb {...props} />;
		default:
			return <AppSVGNative {...props} />;
	}	
};
