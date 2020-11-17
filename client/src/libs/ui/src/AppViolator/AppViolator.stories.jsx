import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { AppViolator } from './AppViolator'

storiesOf('AppViolator', module)
  .add('Interactive: True', () => (
    <AppViolator
      message={'You are in violation!'}
      backgroundColor={'purple'}
      textColor={'white'}
      icon={'user'}
      interactive={true}
    />
  ))
  .add('Interactive: False', () => (
    <AppViolator
      message={'You are in violation!'}
      backgroundColor={'white'}
      textColor={'white'}
      icon={'user'}
      interactive={false}
    />
  ))
