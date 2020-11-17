// taken from
// https://github.com/react-native-web-community/react-native-web-maps/pull/21
// adds onPress and custom components as markers

import React from 'react';
import { Marker, OverlayView } from 'react-google-maps';

const ConditionalWrap: React.FC<{ onPress: () => void, condition: boolean }> = ({ onPress, condition,  children }) =>  {
	
	return (condition) ? (<div
			// ref={(ref) => google.maps.OverlayView.preventMapHitsFrom(ref)}
			onClick={onPress}
		>
			{children}
		</div>) : <>{children}</>;
}

export interface AppMapMarkerProps {
	description: string;
	title: string;
	coordinate: { latitude: number, longitude: number };
	onPress: () => void;
};

export const AppMapMarker: React.FC<AppMapMarkerProps> = ({description, title, coordinate, children, ...rest}) => {
	
    if (children) {

			const { onPress, ...overlayRest } = rest;

      return (
        <OverlayView
          {...overlayRest}
          // title={description ? `${title}\n${description}` : title}
          position={{ lat: coordinate.latitude, lng: coordinate.longitude }}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <ConditionalWrap condition={!!onPress} onPress={onPress}>{children}</ConditionalWrap>
        </OverlayView>
      );
		}
		
    return (
      <Marker
        {...rest}
        title={description ? `${title}\n${description}` : title}
        position={{ lat: coordinate.latitude, lng: coordinate.longitude }}
      />
    );
	}