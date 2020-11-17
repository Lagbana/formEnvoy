import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { AppSpinner } from './AppSpinner'

storiesOf('AppSpinner', module)
  .add('Purple spinner', () => <AppSpinner color={'purple'} />)
  .add('Blue spinner', () => <AppSpinner color={'blue'} />)
  .add('Black spinner', () => <AppSpinner color={'black'} />)
