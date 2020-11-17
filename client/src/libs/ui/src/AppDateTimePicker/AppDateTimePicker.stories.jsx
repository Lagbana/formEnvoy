import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { AppDateTimePicker } from './AppDateTimePicker'


storiesOf('AppDateTimePicker', module)
  .add('Default', () => (
    <AppDateTimePicker
			value={new Date()}
    />
  ))
	.add('Error', () => (
    <AppDateTimePicker
			value={new Date()}
			onBlur={(visible, date) => { }}
			error={'An error has occurred'}
    />
  ))
	.add('Minimum Date', () => (
    <AppDateTimePicker
			value={new Date()}
			onBlur={(visible, date) => { }}
			minimumDate={new Date()}
    />
  ))
	.add('Maximum Date', () => (
    <AppDateTimePicker
			value={new Date()}
			onBlur={(visible, date) => { }}
			minimumDate={new Date(2020, 11, 24, 10, 33, 30, 0)}
    />
  ))
