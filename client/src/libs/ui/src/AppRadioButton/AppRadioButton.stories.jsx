import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { AppRadioButton } from './AppRadioButton'

storiesOf('AppPreload', module)
  .add('Standard type', () => (
    <AppRadioButton
      disabled={false}
      options={[
        {
          icon: 'smiling-face',
          label: 'smile',
          value: 'test value',
          other: false
        }
      ]}
    />
  ))
  .add('Other type', () => (
    <AppRadioButton
      disabled={false}
      options={[
        {
          icon: 'smiling-face',
          label: 'smile',
          value: 'test value',
          other: true
        }
      ]}
    />
  ))
  .add('Disabled', () => (
    <AppRadioButton
      disabled={true}
      options={[
        {
          icon: 'smiling-face',
          label: 'smile',
          value: 'test value',
          other: true
        }
      ]}
    />
  ))
