import * as React from 'react';
import { AppSVGProps } from './AppSVG.interface';

export function AppSVGNative({style, Image, onLayout, svgProps}: AppSVGProps) {
	return (
			<Image style={style} onLayout={onLayout} {...svgProps}/>
	)			
}