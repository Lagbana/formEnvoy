/* HTML-enabled text block
=============================== */

import React from 'react';
import { View, Text, StyleSheet, Platform, TextStyle } from 'react-native';
import HTML from 'react-native-render-html';
import { useInAppBrowser } from '../hooks';
import { Typography, Colors } from 'libs/ui/src/WebButton/node_modules/libs/ui/src/WebLoading/node_modules/colibri/styles';
import { isNil, isString } from 'lodash';

export interface TagStyle {
	[key: string]: TextStyle;
}

export interface AppTextProps {
	fontStyle?: TextStyle;
	tagsStyles?: TagStyle;
	style?: TextStyle;
	classesStyles?: HTML.StylesDictionary;
	onLinkPress?: (url: string) => void;
}

export const AppText: React.FC<AppTextProps> = ({
  children,
  fontStyle,
  tagsStyles,
  classesStyles,
  onLinkPress,
	style
}) => {
  const { openLink } = useInAppBrowser();

  // styles

  const styles = StyleSheet.create({
    container: {
      marginBottom: 20,
    },
  });

  const baseFontStyle = {
    ...Typography.bodyLarge,
    color: Colors.text,
    ...style,
    ...fontStyle,
  };

  const baseTagStyles = {
    b: { fontFamily: Typography.families.bold, fontWeight: null },
    strong: { fontFamily: Typography.families.bold, fontWeight: null },
    a: { color: Colors.blue, textDecorationLine: 'none' },
    ...tagsStyles,
  };

	if (isNil(children) || children === '') { return null; }

	if (Platform.OS === 'web') {

		const content = (isString(children)) ? <div dangerouslySetInnerHTML={{ __html: children }} /> : children;

		return (
			<Text style={[styles.container, baseFontStyle, style]}>
				{content}
			</Text>
		);

	} else {

		const content = (isString(children)) ? <HTML
					html={children}
					baseFontStyle={baseFontStyle}
					tagsStyles={baseTagStyles}
					classesStyles={classesStyles}
					onLinkPress={(e, href) => {
						openLink(href);
						if(onLinkPress) { onLinkPress(href); }
					}}
				/>: children;

		return (
			<View style={[styles.container, style]}>
				{content}
			</View>
		)
	}
};
