import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { AppText } from './AppText'

storiesOf('AppText', module).add('Default', () => (
  <AppText onLinkPress={(string: 'test') => null} children={'Hello World!'} />
))
