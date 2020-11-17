import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { Typography, Colors, Layouts } from 'libs/ui/src/WebButton/node_modules/libs/ui/src/WebLoading/node_modules/colibri/styles';
import { AppRadioButtonDirection, AppRadioButtonOptionStandardType } from '../AppRadioButton.interface';
import { AppAnimatedView } from '../../AppAnimatedView/AppAnimatedView';
import { AppIcon } from '../../AppIcon';

export interface AppRadioButtonStandardOptionProps<T> {
	option: AppRadioButtonOptionStandardType<T>;
	selectedValue?: T | null;
	direction: AppRadioButtonDirection;
	onSelect?: (value: T) => void;
	animation: {
		translateY: number;
		opacity: number;
	};
}

export const AppRadioButtonStandardOption: <T = any>(props: AppRadioButtonStandardOptionProps<T>) => React.ReactElement = (props) => {
	const { 
		direction,
		selectedValue,
		onSelect,
		option: { value, icon, image, label }, 
		animation: { translateY, opacity } 
	} = props;

	const styles = StyleSheet.create({
		box: {
      width: direction === 'row' ? '50%' : '100%',
      padding: 7,
		},
		image: {
      width: '100%',
      aspectRatio: 1,
      borderBottomRightRadius: 14,
      borderBottomLeftRadius: 14,
		},
		default: {
			...Layouts.shadowTile,
			backgroundColor: Colors.white,
			flex: 1,
		},
		wrapper: {
			flexDirection: 'row',
			alignItems: 'center',
			paddingVertical: 20,
			paddingLeft: direction === 'row' ? 10 : 20,
			paddingRight: direction === 'row' ? 10 : 50,
			flexShrink: 1,
			flex: 1,
		},
		selected: {
			backgroundColor: Colors.green,
		},
		label: {
			...Typography.labelDefault,
			color: Colors.purple,
			flexShrink: 1,
		},
		selectedLabel: {
			color: Colors.white,
		},
		icon: {
			color: Colors.white,
			marginLeft: direction === 'row' ? 10 : 20,
		},
	});

	const handleSelect = () => { if (onSelect) { onSelect(value); } }

	const isActive = selectedValue === value;
	const iconDisplay = (icon !== '' && icon !== undefined) ? <AppIcon
		name={icon || 'check'}
		size={22}
		style={[
			styles.icon,
			{ opacity: isActive ? 1 : 0 },
		]}
	/> : null;

	const imageDisplay = (image) ? <View style={styles.image}>{image}</View> : null;

	return (
		<AppAnimatedView
			style={
				[
					styles.box,
					/*
					{ 
						opacity,
						transform: [
							{
								translateY
							}
						]
					}
					*/
				]
			}>
				<TouchableOpacity
					style={[
						styles.default,
						isActive ? styles.selected : {},
					]}
					onPress={handleSelect}
					onLongPress={handleSelect}
				>
					<View style={styles.wrapper}>
						<Text
							style={[
								styles.label,
								isActive ? styles.selectedLabel : {}
							]}
						>
							{label}
						</Text>
						{iconDisplay}
					</View>
					{imageDisplay}
				</TouchableOpacity>
			</AppAnimatedView>
		);
			
}