import * as React from 'react';
import { View } from 'react-native';
import { AppSVGProps } from './AppSVG.interface';

export function AppSVGWeb({style, Image, onLayout, svgProps}: AppSVGProps) {
	return (
		<View style={style} onLayout={onLayout}>
			<Image {...svgProps}/>
		</View>
	)			
}