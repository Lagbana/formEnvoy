/* Overrides React Navigation's DrawerItemList to completely hide items with no label
=============================== */

import * as React from 'react';
import { View } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/routers';
import { DrawerItem, DrawerContentComponentProps, DrawerContentOptions } from '@react-navigation/drawer';

export interface AppDrawerItemListProps extends DrawerContentComponentProps<DrawerContentOptions> {
}
export const AppDrawerItemList = ({
	navigation,
  state,
  descriptors,
  activeTintColor,
  inactiveTintColor,
  activeBackgroundColor,
  inactiveBackgroundColor,
  itemStyle,
  labelStyle,
}: AppDrawerItemListProps) => {

  const nodes = state.routes.map((route, i) => {
    const focused = i === state.index;
    const { title, drawerLabel, drawerIcon } = descriptors[route.key].options;

    return (
      <View key={route.key}>
        {typeof drawerLabel === 'string' && (
          <DrawerItem
            label={
              drawerLabel !== undefined
                ? drawerLabel
                : title !== undefined
                ? title
                : route.name
            }
            icon={drawerIcon}
            focused={focused}
            activeTintColor={activeTintColor}
            inactiveTintColor={inactiveTintColor}
            activeBackgroundColor={activeBackgroundColor}
            inactiveBackgroundColor={inactiveBackgroundColor}
            labelStyle={labelStyle}
            style={itemStyle}
            onPress={() => {
              navigation.dispatch({
                ...(focused
                  ? DrawerActions.closeDrawer()
                  : CommonActions.navigate(route.name)),
                target: state.key,
              });
            }}
          />
        )}
      </View>
    );
	});
	
	return <>{nodes}</>;

};
