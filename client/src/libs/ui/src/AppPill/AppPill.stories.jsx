import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { AppPill } from './AppPill'

storiesOf('AppPill', module)
  .add('Smiling face', () => (
    <AppPill icon={'smiling-face'} label='Smiling face pill' color={'blue'} />
  ))
  .add('Laughing face', () => (
    <AppPill icon={'laughing-face'} label='Laughing face pill' color={'blue'} />
  ))
  .add('Neutral face', () => (
    <AppPill icon={'neutral-face'} label='Neutral face pill' color={'blue'} />
  ))
