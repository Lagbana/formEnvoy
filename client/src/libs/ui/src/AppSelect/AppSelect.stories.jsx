import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { AppSelect } from './AppSelect'

const items = [
  { Id: 100, Name: 'myApp', Value: 10 },
  { Id: 90, Name: 'myApp-2', Value: 20 },
  { Id: 80, Name: 'myApp-3', Value: 30 }
]

storiesOf('AppSelect', module).add('Default', () => (
  <AppSelect
    keyExtractor={(val: { Id: 100; Name: 'myApp'; Value: 10 }) => {
      return ''
    }}
    items={items}
    children={'Hello App Select'}
  />
))
