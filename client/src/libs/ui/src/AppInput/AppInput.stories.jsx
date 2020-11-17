import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { AppInput } from './AppInput'

storiesOf('AppInput', module)
  .add('Text', () => <AppInput type={'text'} />)
  .add('Email', () => <AppInput type={'email'} />)
  .add('Phone', () => <AppInput type={'phone'} />)
  .add('Password', () => <AppInput type={'password'} />)
  .add('Number', () => <AppInput type={'number'} />)
  .add('Address', () => <AppInput type={'address'} />)
  .add('Error', () => <AppInput error={'This is an error message'} />)
  .add('Disabled', () => <AppInput disabled={true} />)
  .add('Number of Lines', () => <AppInput numLines={10} />)
