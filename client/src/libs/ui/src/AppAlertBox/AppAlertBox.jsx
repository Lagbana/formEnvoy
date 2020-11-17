/* Alert-style callout
=============================== */

import React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import { AppText } from '../AppText'
import { Layouts, Typography, Colors } from 'libs/ui/src/WebButton/node_modules/libs/ui/src/WebLoading/node_modules/colibri/styles'
import { AppIcon } from '../AppIcon'

export interface AppAlertBoxProps {
  message?: string
  type?: 'success' | 'error'
  style?: ViewStyle
}

export const AppAlertBox: React.FC<AppAlertBoxProps> = ({
  children,
  message = false,
  type = 'success',
  style
}) => {
  // styles

  const styles = StyleSheet.create({
    container: {
      ...Layouts.shadowTile,
      backgroundColor: Colors.white,
      paddingHorizontal: 30,
      paddingVertical: 40,
      alignItems: 'center'
    },
    icon: {},
    label: {
      textAlign: 'center',
      ...Typography.bodyLarge
    }
  })

  return (
    <View style={[styles.container, style]}>
      {type === 'success' && (
        <AppIcon
          name='check'
          size={55}
          style={[styles.icon, { color: Colors.success }]}
        />
      )}
      {type === 'error' && (
        <AppIcon
          name='x-circle'
          size={55}
          style={[styles.icon, { color: Colors.error }]}
        />
      )}
      {message && <AppText style={styles.label}>{message}</AppText>}
      {children}
    </View>
  )
}
