import { IModalListInDto } from 'react-native-picker-modal-view/dist/Interfaces';

export interface AppSelectItem<T = any> extends IModalListInDto<T> {
  Id: string | number;
  Name: string;
  Value: T;
}

export interface AppSelectListItemProps<T> {
  key: string;
  item: AppSelectItem<T>;
  selected?: boolean;
}

export interface AppSelectSearchItemProps {
  onClose: () => void;
  onBack: () => void;
  title?: string;
}
