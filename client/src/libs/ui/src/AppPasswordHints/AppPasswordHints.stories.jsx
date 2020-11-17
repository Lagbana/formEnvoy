import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { AppPasswordHints } from './AppPasswordHints'

storiesOf('AppPasswordHints', module)
  .add('Visible: True', () => (
    <AppPasswordHints
      visible={true}
      password='abc123'
      children={'Hello Password Hints!'}
      invalidColor={'blue'}
      validColor={'red'}
    />
  ))

  .add('Visible: False', () => (
    <AppPasswordHints
      visible={false}
      password='abc123'
      children={'Hello Password Hints!'}
      invalidColor={'blue'}
      validColor={'red'}
    />
  ))

  .add('With rules', () => (
    <AppPasswordHints
      rules={[
        {
          label: 'password',
          vars: { num: 8 },
          check: (t: 'checked') => {
            return true
          }
        }
      ]}
      visible={false}
      password='abc123'
      children={'Hello Password Hints!'}
      invalidColor={'blue'}
      validColor={'red'}
    />
  ))
