import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { AppTagList } from './AppTagList'

const tags = [
  { label: 'first tag', value: 100 },
  { label: 'second tag', value: 200 },
  { label: 'third tag', value: 300 }
]

storiesOf('AppTagList', module)
  .add('Editable: True', () => <AppTagList editable={true} tags={tags} />)
  .add('Editable: False', () => <AppTagList editable={false} tags={tags} />)
