import React, { useState } from 'react'
import { storiesOf } from '@storybook/react-native'
import { AppPlaceAutocompleteModal } from './AppPlaceAutocompleteModal'
import Constants from 'expo-constants';
import { AppLink } from '../AppLink';
import { GoogleLocationDetailResult } from 'react-native-google-autocomplete/dist/services/Google.service';
import { Maybe } from 'colibri/common';
import { AppText } from '../AppText';

const Harness = () => {
	
	const [open, setOpen] = useState(false);
	const [place, setPlace] = useState<Maybe<GoogleLocationDetailResult>>();
	const handleClose = () => setOpen(false);
	const handleOpen = () => setOpen(true);
	const handlePlaceSelect = (place: GoogleLocationDetailResult) => {
		setPlace(place);
		setOpen(false);
	}

	const placeDisplay = (place) ? <AppText>{place.name}</AppText> : null;

	return (
		<>
			<AppLink onPress={handleOpen}>Open</AppLink>
			<AppPlaceAutocompleteModal 
				onClose={handleClose} 
				apiKey={Constants.manifest.extra.googlePlaces.apiKey} 
				open={open} 
				onPlaceSelect={handlePlaceSelect}
			/>
			{placeDisplay}
		</>
	);

}

storiesOf('AppPlaceAutocompleteModal', module)
  .add('Default', () => (
    <Harness />
  ));
