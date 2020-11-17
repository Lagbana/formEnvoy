import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { Typography, Colors } from 'libs/ui/src/WebButton/node_modules/libs/ui/src/WebLoading/node_modules/colibri/styles';
import { AppAnimatedView } from '../../AppAnimatedView/AppAnimatedView';
import { AppRadioButtonDirection, AppRadioButtonOptionOtherType } from '../AppRadioButton.interface';
import { AppIcon } from '../../AppIcon';

export interface AppRadioButtonOtherOptionProps<T> {
	option: AppRadioButtonOptionOtherType<T>;
	selectedValue?: T | null;
	direction: AppRadioButtonDirection;
	onSelect?: (value: T) => void;
	animation: {
		opacity: number;
		translateY: number;
	};
}

export const AppRadioButtonOtherOption: <T = any>(props: AppRadioButtonOtherOptionProps<T>) => React.ReactElement = (props) => {

  const { 
		direction,
		selectedValue,
		onSelect,
		option: { value, icon, label }, 
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
		default: {},
		selected: {},
		label: {
			...Typography.labelDefault,
			color: Colors.gray,
		},
		selectedLabel: {},
		icon: {
			color: Colors.green,
			marginRight: 10,
		},
		wrapper: {
			flexDirection: 'row',
			alignItems: 'center',
			paddingVertical: 20,
			paddingLeft: 10,
			paddingRight: 42
		}
	});

	const handleSelect = () => { if (onSelect) { onSelect(value); } }

	const isActive = selectedValue === value;

	const iconDisplay = (icon) ? <AppIcon
		name={icon || 'check'}
		size={22}
		style={[
			styles.icon,
			{ opacity: isActive ? 1 : 0 },
		]}
	/> : null;
	return (
		<AppAnimatedView
			style={[
				styles.box, 
				/*
				{ 
					opacity,
					translate: [
						{
							translateY
						}
					]
				 }
				 */
			]}
		>
			<TouchableOpacity
				style={[
					styles.default,
					isActive ? styles.selected : {},
				]}
				onPress={handleSelect}
				onLongPress={handleSelect}
			>
				<View
					style={styles.wrapper}
				>
					{iconDisplay}
					<Text
						style={[
							styles.label,
							isActive? styles.selectedLabel : {},
						]}
					>
						{label}
					</Text>
				</View>
			</TouchableOpacity>
		</AppAnimatedView>
	);
	
}