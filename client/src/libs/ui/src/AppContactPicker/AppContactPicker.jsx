/* Contact picker
=============================== */

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, ListRenderItem } from 'react-native';
import { AppInput } from '../AppInput';
import { AppIcon } from '../AppIcon';
import { Typography, Colors } from 'libs/ui/src/WebButton/node_modules/libs/ui/src/WebLoading/node_modules/colibri/styles';
import { AppModal } from 'colibri/ui';
import * as Contacts from 'expo-contacts';

export interface AppContactPickerProps {
	onClose?: () => void;
	onChooseContact?: (contact: Contacts.Contact) => void;
	visible?: boolean;
}

export const AppContactPicker: React.FC<AppContactPickerProps> = ({
	onClose,
	onChooseContact,
	visible
}) => {

	const [contactsData, setContactsData] = useState<Contacts.Contact[]>([]);
	const [query, setQuery] = useState('');

	useEffect(() => {
		Contacts.getContactsAsync(query ? { name: query } : undefined)
			.then((results) => {
				setContactsData(results?.data)
			})
			.catch(err => {
				console.warn(err);
			})
	}, [query]);

	// styles

	const styles = StyleSheet.create({
		overlay: {
			backgroundColor: Colors.overlay,
			flex: 1,
		},		
		container: {
			backgroundColor: Colors.grayLight,
			flex: 1,
			borderTopLeftRadius: 20,
			borderTopRightRadius: 20,			
		},
		header: {
			backgroundColor: Colors.green,
			paddingVertical: 10,
			paddingHorizontal: 15,
			flexDirection: 'row',
			alignItems: 'center',
			borderTopLeftRadius: 20,
			borderTopRightRadius: 20,			
		},
		searchInput: {
			flex: 1,
		},
		close: {
			flexBasis: 28,
			marginLeft: 10,
		},
		listItem: {
			paddingHorizontal: 10,
			paddingVertical: 18,
			borderBottomWidth: 2,
			backgroundColor: Colors.white,
			borderColor: Colors.grayLight,
		},
		listItemTitle: {
			...Typography.labelDefault,
			color: Colors.purple,
		}
	});

	const ListItem = ({ title, onPress }) => (
		<TouchableOpacity style={styles.listItem} onPress={onPress}>
			<Text style={styles.listItemTitle}>{title}</Text>
		</TouchableOpacity>
	);

	const renderListItem: ListRenderItem<Contacts.Contact> = ({ item }) => (
		<ListItem title={item.name} onPress={() => onPressItem(item)} />
	);

	const onPressItem = (item: Contacts.Contact) => {
		if (onChooseContact) { onChooseContact(item); }
		onBeforeClose();
	};

	const onBeforeClose = () => {
		setQuery('');
		if (onClose) { onClose(); }
	}

	return (
		<AppModal
			animationType="slide"
			visible={visible}
			presentationStyle="overFullScreen"
			statusBarTranslucent={true}
			transparent={true}			
			onRequestClose={onBeforeClose}
		>
			<View style={styles.overlay}>
				<SafeAreaView />
				<View style={styles.container}>
					<View style={styles.header}>
						<AppInput icon="search" placeholder="Search..." onChangeText={setQuery} style={styles.searchInput} />
						<TouchableOpacity style={styles.close} onPress={onBeforeClose}>
							<AppIcon name="x" size={28} color={Colors.white} />
						</TouchableOpacity>
					</View>
					<FlatList<Contacts.Contact>
						data={contactsData}
						renderItem={renderListItem}
						keyExtractor={item => item.id}
					/>
					<SafeAreaView />
				</View>
			</View>
		</AppModal>
	);
};
