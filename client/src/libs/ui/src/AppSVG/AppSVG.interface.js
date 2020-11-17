import { SvgProps } from 'react-native-svg';

export interface AppSVGProps {
	style?,
	svgProps?: SvgProps,
	onLayout?,
	Image: React.FC<SvgProps>
}