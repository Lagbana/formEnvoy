import { ViewStyle, TouchableOpacityProps } from 'react-native';

export interface AppDateTimePickerProps
  extends Omit<TouchableOpacityProps, 'onChange' | 'onBlur'> {
  value: Date;
  onChange?: (date: Date) => void;
  onBlur?: (visible: boolean, date: Date) => void;
  minimumDate?: Date;
  maximumDate?: Date;
  error?: string;
  style?: ViewStyle;
}
