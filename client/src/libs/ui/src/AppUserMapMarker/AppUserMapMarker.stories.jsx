import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { AppUserMapMarker } from './AppUserMapMarker'

storiesOf('AppUserMapMarker', module)
  .add('Blue map marker', () => <AppUserMapMarker color={'blue'} />)
  .add('Red map marker', () => <AppUserMapMarker color={'red'} />)
