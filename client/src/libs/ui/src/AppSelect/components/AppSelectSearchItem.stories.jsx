import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { AppSelectListItem } from './AppSelectListItem'

const item = { Id: 1, Name: 'Item-1', Value: 100 }

storiesOf('AppSelectListItem', module)
  .add('Selected: True', () => (
    <AppSelectListItem item={item} selected={true} key={'1'} />
  ))
  .add('Selected: False', () => (
    <AppSelectListItem item={item} selected={false} key={'2'} />
  ))
