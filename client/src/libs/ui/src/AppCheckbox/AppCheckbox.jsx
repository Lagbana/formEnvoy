import React from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { useAnimations } from '../hooks';
import { AppAnimatedView } from '../AppAnimatedView/AppAnimatedView';
import { AppCheckboxOption, AppCheckboxOptionProps } from './components/AppCheckboxOption';
import { AppCheckboxOptionType } from './AppCheckbox.interface';

export interface AppCheckboxProps<T> {
  options?: AppCheckboxOptionType<T>[];
  onSelect?: (value: T[]) => void;
  value: T[];
  isHtml?: boolean;
  customComponent?: React.ComponentType<AppCheckboxOptionProps<T>>;
  scheme?: 'light' | 'dark';
  style?: ViewStyle;
  layout?: {
    spacing?: number;
    checkboxSize?: number;
    fontSize?: number;
  };
}

export function AppCheckbox<T = any>({
  options = [],
  onSelect,
  value,
  isHtml,
  customComponent,
  scheme = 'light',
  layout,
  ...props
}: AppCheckboxProps<T>) {

	const { animateMany } = useAnimations();

  const handleSelect = (selectedItem: AppCheckboxOptionType<T>) => {

    if (value.includes(selectedItem.value)) {
      
      if (onSelect) {
        onSelect(value.filter((currentValue) => currentValue !== selectedItem.value));
			}
			
    } else {
      
      if (onSelect) {
        onSelect([...value, selectedItem.value]);
      }
    }
  };

  const styles = StyleSheet.create({
    container: {
      marginVertical: 20,
		},
		box: {}
	});
	
	// animations

	const animations: any = animateMany(options.length, {
		from: {
			config: { tension: 400, friction: 30 },
			opacity: 0,
			translateY: 20,
		},
		to: {
			opacity: 1,
			translateY: 0,
			delay: 400,
		}
	});

  const OptionComponent = customComponent || AppCheckboxOption;

  return (
    <View style={[styles.container, props.style]}>
			{animations.map(({ translateY, ...rest }, index) => (
        <AppAnimatedView
          style={[styles.box, { ...rest }, { transform: [{ translateY }] }]}
          key={index}
        >
          <OptionComponent
            option={options[index]}
						checked={value?.includes(options[index].value)}
            onPress={handleSelect}
						scheme={scheme}
						isHtml={isHtml}
						layout={layout}
          />
        </AppAnimatedView>
      ))}
    </View>
  );
};
