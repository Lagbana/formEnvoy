export interface AppRadioButtonOptionStandardType<T> {
  image?: React.ReactNode;
  value: T;
  icon?: string;
  label: string;
  other?: false;
}

export interface AppRadioButtonOptionOtherType<T> {
  value: T;
  icon?: string;
  label: string;
  other: true;
}

export type AppRadioButtonOptionType<T> =
  | AppRadioButtonOptionStandardType<T>
  | AppRadioButtonOptionOtherType<T>;

export type AppRadioButtonDirection = 'row' | 'column';
