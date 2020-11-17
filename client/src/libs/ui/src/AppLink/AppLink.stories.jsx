import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { AppLink } from './AppLink'

storiesOf('AppLink', module)
  .add('Phone', () => <AppLink icon='phone' iconSize={32} color='blue'children={'Hello Button!'} />)
  .add('User', () => <AppLink icon='user' iconSize={32} color='blue' children={'Hello Button!'}/>)
  .add('Activity', () => <AppLink icon='activity' iconSize={32} color='blue' children={'Hello Button!'}/>)
  .add('Activity with 50% Opacity', () => (
    <AppLink icon='activity' iconSize={32} color='blue' iconOpacity={50} children={'Hello Button!'}/>
  ))
