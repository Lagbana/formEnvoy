import { AppText } from '../../../../AppText';
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { GoogleLocationDetailResult, GoogleLocationResult } from 'react-native-google-autocomplete/dist/services/Google.service'

export interface ItemProps {
	item: GoogleLocationResult;
	fetchDetails: (placeId: string) => Promise<GoogleLocationDetailResult>;
	onPress?: (result: GoogleLocationDetailResult) => void;
}

export const Item: React.FC<ItemProps> = ({ item, fetchDetails, onPress }) => {

	const styles = StyleSheet.create({
		item: {
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: '#c8c7cc',
      justifyContent: 'center',
			padding: 16,
			margin: 0
		},
		text: {
			marginBottom: 0
		}
	});

	const handlePress = () => fetchDetails(item.place_id).then(
		(result) => (onPress) ? onPress(result) : () => { /* noop */ }
	);

	return (
		<TouchableOpacity onPress={handlePress} style={styles.item}>
			<AppText style={styles.text}>{item.description}</AppText>
		</TouchableOpacity>
	);

}