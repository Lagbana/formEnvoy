import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { AppModal } from './AppModal'

storiesOf('AppModal', module)
  .add('Visible: True', () => (
    <AppModal
			animationType="slide"
			visible={true}
			presentationStyle="pageSheet"
			onShow={() => null}
			onDismiss={() => null}
			onRequestClose={() => {}}
    />
  ))
  .add('Visible: False', () => (
    <AppModal
			animationType="slide"
			visible={false}
			presentationStyle="pageSheet"
			onShow={() => null}
			onDismiss={() => null}
			onRequestClose={() => { }}
    />
  ))
