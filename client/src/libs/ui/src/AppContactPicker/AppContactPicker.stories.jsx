import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { AppContactPicker } from './AppContactPicker'
import * as Contacts from 'expo-contacts'

storiesOf('AppContactPicker', module)
  .add('Visible: True', () => (
    <AppContactPicker
      onChooseContact={(contact: Contacts.Contact) => {}}
      visible={true}
    />
  ))
  .add('Visible: True', () => (
    <AppContactPicker
      onChooseContact={(contact: Contacts.Contact) => {}}
      visible={false}
    />
  ))
