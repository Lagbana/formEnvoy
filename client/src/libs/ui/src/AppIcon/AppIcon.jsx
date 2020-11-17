import React from 'react';
import { Feather, createIconSetFromIcoMoon } from '@expo/vector-icons';
import { IconProps } from '@expo/vector-icons/build/createIconSet';
import config from './selection.json';

export type GLYPHS = 'face1' | 'face2' | 'face3' | 'face4' | 'face5' | 'ambulance' | 'fire' | 'police' | 'cashless' | 'mapmarker' | string;

export interface AppIconProps extends IconProps<GLYPHS> {

}

export const AppIcon: React.FC<AppIconProps> = ({ name, ...props}) => {
	
	switch (name) {
		case 'face1':
		case 'face2':
		case 'face3':
		case 'face4':
		case 'face5':
		case 'ambulance':
		case 'fire':
		case 'police':
		case 'cashless':
		case 'mapmarker':
			const Icon = createIconSetFromIcoMoon(
				config,
				'AgileIcons',
				'AgileIcons'
			) as any ;
			return <Icon name={name} {...props} />
		default:
			return <Feather name={name} {...props} />;
	}
 }