/* Date input with date picker
=============================== */

import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useColorScheme } from 'libs/ui/src/WebButton/node_modules/libs/ui/src/WebLoading/node_modules/colibri/styles';
import { AppDateTimePickerProps } from '../AppDateTimePicker.interface';
import moment from 'moment';
import { AppInput } from '../../AppInput';

export const AppDateTimePicker: React.FC<AppDateTimePickerProps> = ({
	value,
	onChange,
	onBlur,
	minimumDate,
	maximumDate,
	error,
	style,
	...touchableOpacityProps
}) => {
	// vars
	const [pickerVisible, setPickerVisible] = useState(false);
	const colorScheme = useColorScheme();

	const styles = StyleSheet.create({
		container: {
			marginBottom: 20,
		},
	});

	const showDatePicker = () => {
		setPickerVisible(true);
	};

	const hideDatePicker = () => {
		setPickerVisible(false);
	};

	const handleConfirm = (date) => {
		hideDatePicker();
		if (onChange) {
			onChange(date);
		}
	};

	// TODO: fix type error where DateTimePickerModal incorrectly passes date as second param
	const handleHide: any = (visible: any, date: any) => {
		if (onBlur) {
			onBlur(visible, date);
		}
	};

	return (
		<View style={[styles.container, style]}>
			<DateTimePickerModal
				isDarkModeEnabled={colorScheme === 'dark'}
				isVisible={pickerVisible}
				date={value}
				mode="date"
				onConfirm={handleConfirm}
				onHide={handleHide}
				onCancel={hideDatePicker}
				minimumDate={minimumDate}
				maximumDate={maximumDate}
				display="spinner"
			/>
			<TouchableOpacity onPress={showDatePicker} {...touchableOpacityProps}>
				<AppInput
					icon="calendar"
					value={moment(value).format('MMMM D, YYYY')}
					editable={false}
					error={error}
				/>
			</TouchableOpacity>
		</View>
	);
};
