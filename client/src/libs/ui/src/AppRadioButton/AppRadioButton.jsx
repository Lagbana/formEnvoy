import React from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';
import { useAnimations } from '../hooks';
import { zipWith } from 'lodash';
import { AppRadioButtonStandardOption } from './components/AppRadioButtonStandardOption';
import { AppRadioButtonOtherOption } from './components/AppRadioButtonOtherOption';
import { AppRadioButtonOptionType, AppRadioButtonDirection } from './AppRadioButton.interface';
import { isOptionOtherType } from './isOptionOtherType';

export interface AppRadioButtonProps<T> {
  options: AppRadioButtonOptionType<T>[];
  onSelect?: (value: T) => void;
  direction?: AppRadioButtonDirection;
  value?: T | null;
	style?: ViewStyle;
	disabled?: boolean;
}

export const AppRadioButton: <T = any>(props: AppRadioButtonProps<T>) => React.ReactElement = ({
  options,
  onSelect,
  value = null,
  direction = 'row',
  style,
}) => {

	const { animateMany } = useAnimations();

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: direction,
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginVertical: 20,
      marginHorizontal: -7,
    }
	});
	
	// animations

	const animations: any = animateMany(options.length, {
		from: {
			config: { tension: 500, friction: 30 },
			opacity: 0,
			translateY: 20,
		},
		to: {
			opacity: 1,
			translateY: 0,
			delay: 0,
		}
	});	

	const optionConfig = zipWith(options, animations, (option, animation: any) => ({ option, animation }));

  return (
    <View style={[styles.container, style]}>
      {optionConfig.map(
				({ option, animation }, index) => isOptionOtherType(option) ?
				<AppRadioButtonOtherOption
					option={option} 
					animation={animation} 
					selectedValue={value}
					key={index}
					direction={direction}
					onSelect={onSelect}
				/>:
				<AppRadioButtonStandardOption 
					option={option} 
					animation={animation} 
					selectedValue={value}
					key={index}
					direction={direction}
					onSelect={onSelect}
				/>
			)}
    </View>
  );
};
