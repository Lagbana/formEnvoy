import * as React from 'react';
import { AppSelectProps } from './AppSelect';
import RNPickerSelect, { Item } from 'react-native-picker-select';
import { AppInput } from '../AppInput/AppInput';
import { View } from 'react-native';
import { find } from 'lodash';
{/* TODO: Ensure the onClose handler works here.  Is the 'value' var correct? */}

export interface AppSelectWebProps<T> extends AppSelectProps<T> {
}

export function AppSelectWeb<T>({ placeholder, filter, value, onChange, onBlur, items: _items, children,  keyExtractor }: AppSelectWebProps<T>) {

	const items: Item[] = _items.filter(
		(i) => (filter) ? filter(i) : true
	).map(
			(item) => ({
				label: item.Name,
				value: item,
				key: keyExtractor(item)
			})
	);

	const label = find(items, (item) => item.value === value)?.label || '';

	return (
		<RNPickerSelect
			value={value}
			onValueChange={(value) => { if (onChange) { onChange(value); }}}
			onClose={() => { if (onBlur) { onBlur() }}}
			items={items}
		>
			{' '}
			
			{children && <View>{children}</View>}
			{!children && (
				<AppInput
					icon="chevron-down"
					iconPosition="right"
					editable={false}
					value={label}
					placeholder={placeholder}
				/>
			)}
		</RNPickerSelect>
	)
			
}