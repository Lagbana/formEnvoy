import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { AppHandle } from './AppHandle'
import { ViewStyle, StyleSheet } from 'react-native'

	const dummyStyles: ViewStyle = {}
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0
    },
    handle: {
      width: 70,
      height: 4,
      borderRadius: 3,
      backgroundColor: '#999',
      opacity: 0.35,
      marginRight: 'auto',
      marginLeft: 'auto'
    }
  })


storiesOf('AppHandle', module)
  .add('Default', () => (
    <AppHandle
			style={{...styles, ...dummyStyles}}
    />
  ))

