import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  AppAutoCompleteItem,
  AppAutoCompleteItemType,
} from './components/AppAutoCompleteItem';

export interface AppAutoCompleteListProps {
  suggestions?: AppAutoCompleteItemType[];
  query: RegExp | string;
  onAdd?: (item: any) => void;
}

export const AppAutoCompleteList: React.FC<AppAutoCompleteListProps> = ({
  suggestions = [],
  query = '',
  onAdd,
}) => {
  // styles

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginVertical: 20,
    },
  });

  return (
    <View style={styles.container}>
      {suggestions.map((item) => (
        <AppAutoCompleteItem
          key={item.value}
          tag={item}
          query={query}
          onPress={onAdd}
        />
      ))}
    </View>
  );
};
