import React from 'react';
import { storiesOf } from "@storybook/react-native";
import { AppIcon } from './AppIcon';

storiesOf('AppIcon', module)
	.add('Phone', () => <AppIcon name="phone" size={32} color="blue" />)
	.add('User', () => <AppIcon name="user" size={32} color="blue" />)
	.add('Activity', () => <AppIcon name="activity" size={32} color="blue" />);