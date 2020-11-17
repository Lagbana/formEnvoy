import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { AppMapMarker } from './AppMapMarker.web'

storiesOf('AppMapMarker', module)
  .add('Default', () => (
    <AppMapMarker
      description='phone'
      title={'Ottawa\'s location'}
      coordinate={{latitude: 45.424721, longitude: -75.695000}}
			children={'Ottawa!'}
			onPress={() => {}}
    />
  ))
  