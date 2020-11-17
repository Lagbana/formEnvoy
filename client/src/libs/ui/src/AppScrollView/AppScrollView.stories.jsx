import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { AppScrollView } from './AppScrollView'

storiesOf('AppScrollView', module)
  .add('Standard type', () => (
    <AppScrollView
			children={'Hello App ScrollView'}
    />
  ))