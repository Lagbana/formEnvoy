/* Slider
=============================== */

import React from 'react'
import { StyleSheet } from 'react-native'
import Slider from '@brlja/react-native-slider'
import { Maybe } from 'colibri/common'
import { Colors } from 'libs/ui/src/WebButton/node_modules/libs/ui/src/WebLoading/node_modules/colibri/styles'

export interface AppSliderProps {
	style?;
	minimumValue?: number;
	maximumValue?: number;
	value: Maybe<number>;
	onValueChange?;
	onSlidingComplete?: () => void;
	minimumTrackTintColor?: string;
	maximumTrackTintColor?: string;
	thumbStyle?;
}

export const AppSlider = ({
	style = {},
	minimumValue = 0,
	maximumValue = 100,
	value,
	onValueChange,
	onSlidingComplete,
	minimumTrackTintColor = Colors.green,
	maximumTrackTintColor = Colors.grayLight,
	thumbStyle,
	...props
}: AppSliderProps) => {

	// styles

	const styles = StyleSheet.create({
		thumb: {
			backgroundColor: Colors.white,
			shadowColor: '#000',
			shadowOffset: { width: 0, height: 3 },
			shadowRadius: 6,
			shadowOpacity: 0.35,
		}
	});

	return (
		<Slider
			style={style}
			minimumValue={minimumValue}
			maximumValue={maximumValue}
			value={value}
			onValueChange={onValueChange}
			onSlidingComplete={onSlidingComplete}
			minimumTrackTintColor={minimumTrackTintColor}
			maximumTrackTintColor={maximumTrackTintColor}
			thumbStyle={thumbStyle || styles.thumb}
			{...props}
		/>
	);
};
