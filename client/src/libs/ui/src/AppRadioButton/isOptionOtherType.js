import {
  AppRadioButtonOptionType,
  AppRadioButtonOptionOtherType,
} from './AppRadioButton.interface';

export const isOptionOtherType = <T = any>(
  val: AppRadioButtonOptionType<T>
): val is AppRadioButtonOptionOtherType<T> => {
  return (val as AppRadioButtonOptionOtherType<T>).other === true;
};
