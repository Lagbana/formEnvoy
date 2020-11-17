import * as React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { GoogleAutoComplete } from 'react-native-google-autocomplete'
import { Colors, Typography } from 'libs/ui/src/WebButton/node_modules/libs/ui/src/WebLoading/node_modules/colibri/styles';
import { AppInput } from '../AppInput';
import { AppIcon } from '../AppIcon';
import { List } from './components/List/List';
import { AppModal } from '../AppModal';
import { GoogleLocationDetailResult } from 'react-native-google-autocomplete/dist/services/Google.service';
import { useTranslations } from '../useTranslations';

export interface AppPlaceAutocompleteProps {
	apiKey: string;
	open: boolean;
	onClose?: () => void;
	onPlaceSelect?: (result: GoogleLocationDetailResult) => void;
}

export const AppPlaceAutocompleteModal: React.FC<AppPlaceAutocompleteProps> = ({ apiKey, open, onClose, onPlaceSelect }) => {

	const { translate } = useTranslations();

	const styles = StyleSheet.create({
		header: {
      backgroundColor: Colors.green,
      paddingVertical: 10,
      paddingHorizontal: 15,
      flexDirection: 'row',
      alignItems: 'center'
    },
    searchInput: {
      fontSize: Typography.sizes.input,
      color: Colors.grayDark,
      fontFamily: Typography.families.medium,
      width: 300,
      flex: 15,
      minHeight: 40
		},
		close: {
      flexBasis: 28,
      marginLeft: 10
		},
		container: {
      backgroundColor: Colors.grayLight,
      flex: 1
    },
	});

	return (
		<>
			<AppModal
        animationType='slide'
        visible={open}
        presentationStyle='pageSheet'
        onRequestClose={onClose}
      >
        <View style={styles.container}>
          <SafeAreaView />
					<GoogleAutoComplete
						apiKey={apiKey}
						debounce={300}
						minLength={2}
						queryTypes={'(cities)'}
					>
						{({
							inputValue,
							handleTextChange,
							locationResults,
							fetchDetails
						}) => (
							<React.Fragment>
								<View style={styles.header}>
									<AppInput
										style={styles.searchInput}
										value={inputValue}
										onChangeText={handleTextChange}
										autoFocus={true}
										placeholder={translate('placeholder.searchPlace')}
										icon="search"
									/>
									<TouchableOpacity
										style={styles.close}
										onPress={onClose}
									>
										<AppIcon name='x' size={28} color={Colors.white} />
									</TouchableOpacity>
								</View>
								<SafeAreaView>
									<List
										data={locationResults}
										fetchDetails={fetchDetails}
										onPlaceSelect={onPlaceSelect}
									/>
								</SafeAreaView>
							</React.Fragment>
						)}
					</GoogleAutoComplete>
        </View>
      </AppModal>
		</>
	);
	
}