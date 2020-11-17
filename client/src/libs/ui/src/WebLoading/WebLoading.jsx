import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { useState } from 'react';
import { Typography, Colors } from 'colibri/styles';
import { WebActivityIndicator } from '../WebActivityIndicator';
import { AppLoadingContext } from './WebLoadingContext';

// export interface AppLoadingProps {
//   visible?: boolean;
//   label?: string;
// }

// Using a provider here to solve issue where modal wouldn't unmount on navigation change

export const WebLoading = ({ children }) => {

  const [visible, setVisible] = useState(false);

  // Workaround for https://github.com/joinspontaneous/react-native-loading-spinner-overlay/issues/30
	const setLoading = (loading ) => setTimeout(() => setVisible(loading), 100);
	
	// uncomment and reload app to unstick the loading spinner
	//return <>{children}</>;

  return (
    <AppLoadingContext.Provider value={{ setLoading }}>
      <Spinner
        visible={visible}
        customIndicator={<WebActivityIndicator />}
        textStyle={{ ...Typography.labelSmall, color: Colors.white }}
        overlayColor={Colors.overlay}
        animation="fade"
      />
      {children}
    </AppLoadingContext.Provider>
  );
};
