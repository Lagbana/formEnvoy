import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { GoogleLocationDetailResult, GoogleLocationResult } from 'react-native-google-autocomplete/dist/services/Google.service';
import { Item } from './components/Item';

export interface AppPlaceAutocompleteLocationListProps {
	data: GoogleLocationResult[];
	fetchDetails: (placeId: string) => Promise<GoogleLocationDetailResult>;
	onPlaceSelect?: (result: GoogleLocationDetailResult) => void;
}

export const List = ({ data, fetchDetails, onPlaceSelect }) => {

	const renderItem: ListRenderItem<GoogleLocationResult> = ({item}) => <Item fetchDetails={fetchDetails} item={item} onPress={onPlaceSelect} />;

	return (
		<FlatList<GoogleLocationResult>
			data={data}
			renderItem={renderItem}
			keyExtractor={item => item.place_id}
		/>
	)
}