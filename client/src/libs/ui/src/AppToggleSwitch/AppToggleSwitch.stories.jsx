import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { AppToggleSwitch } from './AppToggleSwitch'

storiesOf('AppToggleSwitch', module)
  .add('Enabled: True', () => <AppToggleSwitch enabled={true} />)
  .add('Enabled: False', () => <AppToggleSwitch enabled={false} />)
