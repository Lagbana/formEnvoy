import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { AppPreload } from './AppPreload'

storiesOf('AppPreload', module).add('Default', () => (
  <AppPreload children={'Application loading ...'} />
))
