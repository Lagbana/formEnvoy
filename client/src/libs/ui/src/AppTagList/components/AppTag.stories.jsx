import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { AppTag } from './AppTag'

const tag = {
  label: 'test tag',
  value: 100
}

storiesOf('AppTag', module)
  .add('Editable: True', () => <AppTag tag={tag} editable={true} />)
  .add('Editable: False', () => <AppTag tag={tag} editable={true} />)
