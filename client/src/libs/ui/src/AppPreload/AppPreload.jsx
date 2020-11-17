import React, { useEffect } from 'react';
import { useState } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import * as Sentry from 'sentry-expo';
import { Maybe } from 'colibri/common';
import { Text } from 'react-native';

export type AppFontsType = string | { [fontFamily: string]: Font.FontSource }

export interface PreloadProviderProps {
	fonts?: AppFontsType;
}
export const AppPreload: React.FC<PreloadProviderProps> = ({children, fonts = {}}) => {

	const [initialized, setInitialized] = useState(false);
	const [error, setError] = useState<Maybe<string>>();

	useEffect(() => {
		startAsync().then(
			SplashScreen.hideAsync
		).then(
			() => setInitialized(true)
		)
		.catch((err) => {
			console.log(err);
			Sentry.captureMessage(JSON.stringify(err));
			setError(err);
		});

	}, []);


	const startAsync = () => Font.loadAsync(fonts);
	
	// This is the main app boot screen which is different from the
	// standard colibri/ui AppLoading component, so should use the expo version

	if (error) {
		return <Text>{JSON.stringify(error)}</Text>;
	} else if (!initialized) {
		return null;
	} else {
		return <>{children}</>;
	}

}