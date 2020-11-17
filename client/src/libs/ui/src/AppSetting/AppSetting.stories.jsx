import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { AppSetting } from './AppSetting'

storiesOf('AppSetting', module)
	.add('Phone', () => (
	<AppSetting
		icon={'phone'}
		color={'blue'}
		label={'blue phone'}
		children={'Hello blue phone!'}
  />
))
	.add('Activity', () => (
	<AppSetting
		icon={'activity'}
		color={'red'}
		label={'red activity'}
		children={'Hello activity!'}
  />
))
	.add('User', () => (
	<AppSetting
		icon={'user'}
		color={'blue'}
		label={'blue user'}
		children={'Hello blue user!'}
  />
))
