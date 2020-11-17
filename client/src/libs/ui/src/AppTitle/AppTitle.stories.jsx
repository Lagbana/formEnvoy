import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { AppTitle } from './AppTitle'

storiesOf('AppTitle', module)
  .add('Blue Title', () => (
    <AppTitle color={'blue'} children={'Hello World!'} style={{}} />
  ))
  .add('Red Title', () => (
    <AppTitle color={'red'} children={'Hello World!'} style={{}} />
  ))
